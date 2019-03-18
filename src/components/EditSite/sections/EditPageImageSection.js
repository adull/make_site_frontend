import React from 'react';

class EditPageImageSection extends React.Component {
  constructor(props) {
    super(props);
    let imageHTML = props.textSubsections[0].props.data.html;
    let imageSrc = imageHTML.match(/'([^']+)'/)[1];
    // console.log(imageHTML);
    var regExp = /\(.*?\)/g;
    var matches = imageHTML.match(regExp);
    let tempArr = [];
    for(let i = 0; i < matches.length; i ++) {
      let val = matches[i]
      tempArr.push(val.substring(1, val.length - 1));

    }
    let transformArr = [];
    for (let j = 0; j < tempArr.length; j ++) {
      let transformEl = tempArr[j].split(", ");
      transformArr.push(transformEl);
    }
    let transformVals = transformArr.flat();
    for(let k = 0; k < transformVals.length; k ++) {
      transformVals[k] = transformVals[k].replace('deg', '');
    }

    this.state = {
      skewX: transformVals[0],
      skewY: transformVals[1],
      rotate: transformVals[2],
      scaleX: transformVals[3],
      scaleY: transformVals[4],
      imageSrc: imageSrc

    }

    this.handleChange = this.handleChange.bind(this);
    this.updateStyle = this.updateStyle.bind(this);

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    // console.log(this.state)
  }

  updateStyle() {
    let skewString = "skew(" + this.state.skewX + "deg, " + this.state.skewY + "deg) ";
    let rotateString = "rotate(" + this.state.rotate + "deg) ";
    let scaleString = "scale(" + this.state.scaleX + ", "  + this.state.scaleY + ") ";
    let transformString = skewString + rotateString + scaleString;

    let styleString = "<img src='" + this.state.imageSrc + "' style='transform: " + transformString + ";' />";
     // console.log(this.props)
     console.log(styleString);
    this.props.updateText(this.props.pageSectionIndex, styleString);
    this.props.updateView();


  }
  render() {
    let skewString = "skew(" + this.state.skewX + "deg, " + this.state.skewY + "deg) ";
    let rotateString = "rotate(" + this.state.rotate + "deg) ";
    let scaleString = "scale(" + this.state.scaleX + ", "  + this.state.scaleY + ") ";
    let transformString = skewString + rotateString + scaleString;

    let style = {
      transform: transformString
    }
    // console.log(style)
     // style={"transform: "  + transformString }
    return (
      <div className="edit-page-image-section">
        <div className="image">
          <img src={this.state.imageSrc} style={style}/>
        </div>
        <div className="controls">
          <div className="skew-x">
            X Skew
            <input
              type="range"
              id="skewX"
              name="skewX"
              min="-360"
              max="360"
              value={this.state.skewX}
              onChange={this.handleChange} />
          </div>
          <div className="skew-y">
            Y Skew
            <input
              type="range"
              id="skewY"
              name="skewY"
              min="-360"
              max="360"
              value={this.state.skewY}
              onChange={this.handleChange} />
          </div>
          <div className="rotate">
            Rotate
            <input
              type="range"
              id="rotate"
              name="rotate"
              min="-360"
              max="360"
              value={this.state.rotate}
              onChange={this.handleChange} />
          </div>
          <div className="scaleX">
            Scale X
            <input
              type="range"
              id="scaleX"
              name="scaleX"
              min="0"
              max="5"
              step="0.05"
              value={this.state.scaleX}
              onChange={this.handleChange} />
          </div>
          <div className="scaleY">
            Scale Y
            <input
              type="range"
              id="scaleY"
              name="scaleY"
              min="0"
              max="5"
              step="0.05"
              value={this.state.scaleY}
              onChange={this.handleChange} />
          </div>
          <button className="cms-btn edit-image-section-submit" onClick={this.updateStyle}>Update</button>
        </div>
      </div>
    )
  }
}

export default EditPageImageSection;
