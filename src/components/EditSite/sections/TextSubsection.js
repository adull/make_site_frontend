import React from 'react';

function createMarkup(text) {
  return {__html: text};
}

class TextSubsection extends React.Component {
  render() {
    let data = this.props.data;
    let styles = {
      marginTop: this.props.data.margin[0],
      marginRight: this.props.data.margin[1],
      marginBottom: this.props.data.margin[2],
      marginLeft: this.props.data.margin[3],
      paddingTop: this.props.data.padding[0],
      paddingRight: this.props.data.padding[1],
      paddingBottom: this.props.data.padding[2],
      paddingLeft: this.props.data.padding[3],
    }
    return (
      <span style={styles} dangerouslySetInnerHTML={createMarkup(data.html)} />

    )
  }
}

export default TextSubsection;
