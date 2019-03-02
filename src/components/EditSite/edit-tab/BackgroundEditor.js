import React from 'react';

import { CompactPicker } from 'react-color'

class BackgroundEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundOpen: false,
      marginsOpen: false,
      paddingsOpen: false,
      colorOpen: false,
    }
    this.toggleBackgroundOpen = this.toggleBackgroundOpen.bind(this);
    this.toggleMarginsOpen = this.toggleMarginsOpen.bind(this);
    this.togglePaddingsOpen = this.togglePaddingsOpen.bind(this);
    this.toggleColorOpen = this.toggleColorOpen.bind(this);
    this.updateMargin = this.updateMargin.bind(this);
    this.updatePadding = this.updatePadding.bind(this);
    this.updateBackgroundColor = this.updateBackgroundColor.bind(this);
  }

  toggleBackgroundOpen() {
    this.setState({
      backgroundOpen: !this.state.backgroundOpen
    });
  }

  toggleMarginsOpen() {
    this.setState({
      marginsOpen: !this.state.marginsOpen
    })
  }

  togglePaddingsOpen() {
    this.setState({
      paddingsOpen: !this.state.paddingsOpen
    })
  }

  toggleColorOpen() {
    console.log("toggle color")
    this.setState({
      colorOpen: !this.state.colorOpen
    })
  }

  updateMargin(event) {
    let style = this.props.style;
    let margin = this.props.style.margin;
    let updateVal = parseInt(event.target.value);
    if(event.target.name === "marginTop") {
      margin = [updateVal, margin[1], margin[2], margin[3]];
    }
    else if(event.target.name === "marginRight") {
      margin = [margin[0], updateVal, margin[2], margin[3]];
    }
    else if(event.target.name === "marginBottom") {
      margin = [margin[0], margin[1], updateVal, margin[3]];
    }
    else if(event.target.name === "marginLeft") {
      margin = [margin[0], margin[1], margin[2], updateVal];
    }
    else {
      console.log("youre fucked")
    }
    let backgroundJSON = this.props.style;
    backgroundJSON.margin = margin;
    this.props.updateBackground(backgroundJSON);
  }

  updatePadding(event) {
    let style = this.props.style;
    let padding = this.props.style.padding;
    for(let i = 0; i < padding.length; i ++) {
      if(padding[i] === null) {
        console.log("dis is nukk")
        padding[i] = 0;
      }
      else {
        console.log(padding[i])
      }
    }
    let updateVal = parseInt(event.target.value);
    if(event.target.name === "paddingTop") {
      padding = [updateVal, padding[1], padding[2], padding[3]];
    }
    else if(event.target.name === "paddingRight") {
      padding = [padding[0], updateVal, padding[2], padding[3]];
    }
    else if(event.target.name === "paddingBottom") {
      padding = [padding[0], padding[1], updateVal, padding[3]];
    }
    else if(event.target.name === "paddingLeft") {
      padding = [padding[0], padding[1], padding[2], updateVal];
    }
    else {
      console.log("youre fucked")
    }
    let backgroundJSON = this.props.style;
    backgroundJSON.padding = padding;
    this.props.updateBackground(backgroundJSON);
  }

  updateBackgroundColor(color) {
    let backgroundJSON = this.props.style;
    // let color = color.hex;
    backgroundJSON.color = color.hex;
    this.props.updateBackground(backgroundJSON);
  }

  postStyle() {

  }

  render() {
    // console.log(this.props.style);
    return (
      <div className="background-editor">
        <div className="background-options-title" onClick={this.toggleBackgroundOpen}>
          Background
          <div className={this.state.backgroundOpen ? "editor-toggle-triangle open":"editor-toggle-triangle close"}></div>
        </div>
        <div className={this.state.backgroundOpen ? "background-editor-controls show" : "background-editor-controls close" }>
          <div className="margins-editor-title background-options-title" onClick={this.toggleMarginsOpen}>
            Margins
            <div className={this.state.marginsOpen ? "editor-toggle-triangle open":"editor-toggle-triangle close"}></div>
          </div>
          <div className={this.state.marginsOpen ? "margin-controller-section open" : "margin-controller-section close"}>
            <div className="margin-controller margin-top-controller">
              <label htmlFor="marginTop">
                Top Margin
                <input type="number" name="marginTop" min="0" max="100" value={this.props.style.margin[0]} onChange={this.updateMargin}/>
              </label>
            </div>
            <div className="margin-controller margin-right-controller">
              <label htmlFor="marginRight">
                Right Margin
                <input type="number" name="marginRight" min="0" max="100" value={this.props.style.margin[1]} onChange={this.updateMargin} />
              </label>
            </div>
            <div className="margin-controller margin-bottom-controller">
              <label htmlFor="marginBottom">
                Bottom Margin
                <input type="number" name="marginBottom" min="0" max="100" value={this.props.style.margin[2]} onChange={this.updateMargin} />
              </label>
            </div>
            <div className="margin-controller margin-left-controller">
              <label htmlFor="marginLeft">
                Left Margin
                <input type="number" name="marginLeft" min="0" max="100" value={this.props.style.margin[3]} onChange={this.updateMargin} />
              </label>
            </div>
          </div>
          <div className="paddings-editor-title background-options-title" onClick={this.togglePaddingsOpen}>
            Paddings
            <div className={this.state.paddingsOpen ? "editor-toggle-triangle open":"editor-toggle-triangle close"}></div>
            </div>
            <div className={this.state.paddingsOpen ? "padding-controller-section open" : "padding-controller-section close"}>
              <div className="margin-controller margin-top-controller">
                <label htmlFor="paddingTop">
                  Top Padding
                  <input type="number" name="paddingTop" min="0" max="100" value={this.props.style.padding[0]} onChange={this.updatePadding}/>
                </label>
              </div>
              <div className="margin-controller margin-right-controller">
                <label htmlFor="paddingRight">
                  Right Padding
                  <input type="number" name="paddingRight" min="0" max="100" value={this.props.style.padding[1]} onChange={this.updatePadding} />
                </label>
              </div>
              <div className="margin-controller margin-bottom-controller">
                <label htmlFor="paddingBottom">
                  Bottom Padding
                  <input type="number" name="paddingBottom" min="0" max="100" value={this.props.style.padding[2]} onChange={this.updatePadding} />
                </label>
              </div>
              <div className="margin-controller margin-left-controller">
                <label htmlFor="paddingLeft">
                  Left Padding
                  <input type="number" name="paddingLeft" min="0" max="100" value={this.props.style.padding[3]} onChange={this.updatePadding} />
                </label>
              </div>
            </div>
            <div className="color-editor-title background-options-title" onClick={this.toggleColorOpen}>
              Color
              <div className={this.state.colorOpen ? "editor-toggle-triangle open":"editor-toggle-triangle close"}></div>
            </div>
            <div className={this.state.colorOpen ? "color-controller-section open" : "color-controller-section close"}>
              <CompactPicker color={this.props.style.color} onChangeComplete={this.updateBackgroundColor}/>
            </div>
          </div>
        </div>
    );
  }
}

export default BackgroundEditor
