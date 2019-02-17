import React from 'react';

function createMarkup(text) {
  return {__html: text};
}

class TextSubsection extends React.Component {
  render() {
    let data = this.props.data;
    return (
      <span dangerouslySetInnerHTML={createMarkup(data.html)} />

    )
  }
}

export default TextSubsection;
