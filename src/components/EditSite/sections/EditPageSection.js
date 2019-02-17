import React from 'react';

import { Editor } from 'react-draft-wysiwyg';

import { EditorState,
        ContentState,
        convertFromHTML } from 'draft-js';

import {stateToHTML} from 'draft-js-export-html';


import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


import {Link} from 'react-router-dom';

import TextSubsection from './TextSubsection';

function camelCaseToDash( myStr ) {
  return myStr.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
}

let options = {
  inlineStyleFn: (styles) => {
    // console.log(styles);
    let fuck = styles.filter((value) => console.log(value));

    let colorKey = 'color-';
    let color = styles.filter((value) => value.startsWith(colorKey)).first();
    let fontSizeKey = 'fontsize-';
    let font = styles.filter((value) => value.startsWith(fontSizeKey)).first();


    if (color) {
      return {
        element: 'span',
        style: {
          color: color.replace(colorKey, ''),
        },
      };
    }
    else if(font) {
      return {
        element: 'span',
        style: {
          fontSize: font.replace(fontSizeKey, ''),
        },
      };
    }
  },
};

class EditPageSection extends React.Component {
  constructor(props) {
    super(props);

    // console.log(props)
    let htmlText = ''
    for(let i = 0; i < props.textSubsections.length; i ++) {
      htmlText += props.textSubsections[i].props.data.html;
    }

    // console.log(htmlText);

    const blocksFromHTML = convertFromHTML(htmlText);
    // const blocksFromHTML = convertFromHTML(props.textSubsecti)

    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap,
    );

    this.state = {
      editorState: EditorState.createWithContent(
        state,
        // decorator,
      ),
    };

    this.state = {editorState: this.state.editorState}
    this.onChange = (editorState) => this.setState({editorState});
    this.setEditor = (editor) => {
      this.editor = editor;
    };
    this.updateText = this.updateText.bind(this);
    this.createHTML = this.createHTML.bind(this);
  }

  createHTML(data) {
    // console.log("create html gets called")
    let style = {
      textAlign: data.alignment,
      borderWidth: data.borderWidth,
      borderColor: data.borderColor,
      borderStyle: 'solid',
      color: data.color,
      font: data.font,
      fontSize: data.size,
      textDecoration: data.textDecoration
    }
    const styleString = (
      Object.entries(style).reduce((styleString, [propName, propValue]) => {
        return `${styleString}${camelCaseToDash(propName)}:${propValue};`;
      }, '')
    );

    let returnVal = '<span className="text-subsection" style=' + styleString + '>' + data.textValue+ '</span>'
    return returnVal;
  }

  updateText() {
    let index = this.props.pageSectionIndex;
    console.log(index)
    let contentState = this.state.editorState.getCurrentContent()
    let newHTML = stateToHTML(contentState, options);
    console.log(newHTML)
    this.props.updateText(index, newHTML);
  }

  componentDidMount() {
    // this.focusEditor();
  }

  onEditorStateChange: Function = (editorState) => {
    // console.log(options);
    this.setState({
      editorState
    });
  };

  render() {
    return (
      <div>
        <Editor
          ref={this.setEditor}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          editorState={this.state.editorState}
          onEditorStateChange={this.onEditorStateChange}
        />
        <div className="update cms-btn" onClick={this.updateText}>Update</div>
      </div>
    )
  }
}


export default EditPageSection;
