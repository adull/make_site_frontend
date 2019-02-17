import React from 'react';
import {Editor,
// import {
        EditorState,
        ContentState,
        EditorChangeType,
        RawDraftContentState,
        CompositeDecorator,
        convertFromHTML} from 'draft-js';

// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


import {Link} from 'react-router-dom';

import TextSubsection from './TextSubsection';

function camelCaseToDash( myStr ) {
  return myStr.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
}

class EditPageSection extends React.Component {
  constructor(props) {
    super(props);

    let htmlText = ''
    for(let i = 0; i < props.textSubsections.length; i ++) {
      htmlText += this.createHTML(props.textSubsections[i].props.data);
    }
    console.log(htmlText)

    const blocksFromHTML = convertFromHTML(htmlText);
    console.log(blocksFromHTML)

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

    // let returnVal = '<span className="text-subsection" style=' + styleString + '>' + data.textValue+ '</span>'
    // console.log(returnVal);
    // return returnVal;
    return '<b class="fucker">fuck</b>';
    // return '<i>fck</i>'
  }

  updateText() {
    console.log(this.state.editorState.getCurrentContent());
  }

  componentDidMount() {
    // this.focusEditor();
  }

  render() {
    return (
      <div>
        <Editor
          ref={this.setEditor}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
        <div className="update cms-btn" onClick={this.updateText}>Update</div>
      </div>
    )
  }
}


export default EditPageSection;
