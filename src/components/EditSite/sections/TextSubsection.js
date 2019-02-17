import React from 'react';

class TextSubsection extends React.Component {
  render() {
    // console.log(this.props.data)
    let data = this.props.data;
    let style = {
      textAlign: data.alignment,
      border: data.borderWidth + "px solid " + data.borderColor,
      color: data.color,
      font: data.font,
      fontSize: data.size,
      textDecoration: data.textDecoration
    }
    // console.log(style)
    return (
      <span className="text-subsection" style={style}>{data.textValue}</span>
    )
  }
}

export default TextSubsection;
