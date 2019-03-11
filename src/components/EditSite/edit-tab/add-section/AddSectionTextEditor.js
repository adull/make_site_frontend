import React from 'react';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState,
        ContentState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

let options = {
  inlineStyleFn: (styles) => {
    let fuck = styles.filter((value) => console.log(value));

    let colorKey = 'color-';
    let color = styles.filter((value) => value.startsWith(colorKey)).first();
    let fontSizeKey = 'fontsize-';
    let fontSize = styles.filter((value) => value.startsWith(fontSizeKey)).first();

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
    return style;
  },
};

class AddSectionTextEditor extends React.Component {
  constructor() {
    super();
    let editorState = EditorState.createEmpty();
    this.state = {
      editorState: editorState
    }

    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  // updateText() {
  //   let contentState = this.state.editorState.getCurrentContent();
  //   let newHTML = stateToHTML(contentState, options)
  //   this.props.updateText(newHTML);
  // }

  onEditorStateChange(editorState) {
    this.setState({
      editorState
    });
    let contentState = this.state.editorState.getCurrentContent();
    let newHTML = stateToHTML(contentState, options)
    this.props.updateText(newHTML);
  }

  render() {
    return (
      <div className="add-section-text-editor">
        <Editor
          editorState={this.state.editorState}
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    )
  }
}

export default AddSectionTextEditor;
