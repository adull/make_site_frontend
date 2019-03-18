import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState,
        ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import { stateToHTML } from 'draft-js-export-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {Link} from 'react-router-dom';
import TextSubsection from './TextSubsection';

function camelCaseToDash( myStr ) {
  return myStr.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
}

let options = {
  inlineStyleFn: (styles) => {
    let fuck = styles.filter((value) => console.log(value));

    let colorKey = 'color-';
    let color = styles.filter((value) => value.startsWith(colorKey)).first();
    let fontSizeKey = 'fontsize-';
    let fontSize = styles.filter((value) => value.startsWith(fontSizeKey)).first();
    let fontFamilyKey = 'fontfamily-';
    let fontFamily = styles.filter((value) => value.startsWith(fontFamilyKey)).first();

    let style = {
      element: 'span',
      style: {}
    }

    if (color) {
      style.style.color = color.replace(colorKey, '');
    }
    if(fontSize) {
      style.style.fontSize = fontSize.replace(fontSizeKey, '');
    }
    if (fontFamily) {
      style.style.fontFamily = fontFamily.replace(fontFamilyKey, '');
    }
    return style;
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
    const blocksFromHTML = htmlToDraft(htmlText);

    const state = ContentState.createFromBlockArray(blocksFromHTML);

    let editorState = EditorState.createWithContent(state);

    this.state = {
      editorState: editorState
    }

    this.state = {editorState: this.state.editorState}
    this.onChange = (editorState) => this.setState({editorState});
    this.setEditor = (editor) => {
      this.editor = editor;
    };
    this.updateText = this.updateText.bind(this);
    // this.createHTML = this.createHTML.bind(this);
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  updateText() {
    let index = this.props.pageSectionIndex;
    let contentState = this.state.editorState.getCurrentContent();
    // this applies inline styles.
    let newHTML = stateToHTML(contentState, options);
    console.log(index)
    console.log(newHTML);
    this.props.updateText(index, newHTML);
    this.props.updateView();
  }

  onEditorStateChange(editorState) {
    this.setState({
      editorState
    });
  };

  render() {
    return (
      <div className="edit-page-section">
        <Editor
          ref={this.setEditor}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          editorState={this.state.editorState}
          onEditorStateChange={this.onEditorStateChange}
          blockRendererFn={this.myBlockRenderer}
          blockStyleFn={this.myBlockStyleFunction}
          toolbar={{
            options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'colorPicker', 'link', 'history'],
            fontFamily: {
              options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana', 'Wingdings'],
            }

          }}
        />
        <div className="update-btn cms-btn" onClick={this.updateText}>Update</div>
      </div>
    )
  }
}


export default EditPageSection;
