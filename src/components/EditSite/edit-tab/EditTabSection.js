import React from 'react';
import DeleteSection from './DeleteSection'

class EditTabSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editSectionOpen: false,
      marginsOpen: false,
      paddingsOpen: false
    }
    this.toggleEditSectionOpen = this.toggleEditSectionOpen.bind(this);
    this.toggleMarginsOpen = this.toggleMarginsOpen.bind(this);
    this.togglePaddingsOpen = this.togglePaddingsOpen.bind(this);

    this.updateMargin = this.updateMargin.bind(this);
    this.updatePadding = this.updatePadding.bind(this);
  }

  toggleEditSectionOpen() {
    this.setState({
      editSectionOpen: !this.state.editSectionOpen
    })
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

  updateMargin(event) {
    let margin = this.props.sectionData.text[0].margin;
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
    let sectionJSON = this.props.sectionData;
    sectionJSON.text[0].margin = margin;
    // console.log(this.props.textData.text[0].margin)
    console.log(sectionJSON)
    this.props.updateTextSection(this.props.index, sectionJSON)
  }

  updatePadding(event) {

  }

  render() {
    let margins = this.props.sectionData.text[0].margin;
    let paddings = this.props.sectionData.text[0].padding;
    return (
      <div className="edit-tab-section">
        <div className="edit-tab-section-title" onClick={ this.toggleEditSectionOpen }>
          Type Section: { this.props.sectionData.sectionType }
          <div className={this.state.editSectionOpen ? "editor-toggle-triangle open":"editor-toggle-triangle close"}></div>
        </div>
        <div className={this.state.editSectionOpen ? "edit-tab-section-controls show" : "edit-tab-section-controls close" }>
        <div className="margins-editor-title background-options-title" onClick={this.toggleMarginsOpen}>
          Margins
          <div className={this.state.marginsOpen ? "editor-toggle-triangle open":"editor-toggle-triangle close"}></div>
        </div>
        <div className={this.state.marginsOpen ? "margin-controller-section open" : "margin-controller-section close"}>
          <div className="margin-controller margin-top-controller">
            <label htmlFor="marginTop">
              Top Margin
              <input type="number" name="marginTop" min="0" max="100" value={margins[0]} onChange={this.updateMargin}/>
            </label>
          </div>
          <div className="margin-controller margin-right-controller">
            <label htmlFor="marginRight">
              Right Margin
              <input type="number" name="marginRight" min="0" max="100" value={margins[1]} onChange={this.updateMargin} />
            </label>
          </div>
          <div className="margin-controller margin-bottom-controller">
            <label htmlFor="marginBottom">
              Bottom Margin
              <input type="number" name="marginBottom" min="0" max="100" value={margins[2]} onChange={this.updateMargin} />
            </label>
          </div>
          <div className="margin-controller margin-left-controller">
            <label htmlFor="marginLeft">
              Left Margin
              <input type="number" name="marginLeft" min="0" max="100" value={margins[3]} onChange={this.updateMargin} />
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
                <input type="number" name="paddingTop" min="0" max="100" value={paddings[0]} onChange={this.updatePadding}/>
              </label>
            </div>
            <div className="margin-controller margin-right-controller">
              <label htmlFor="paddingRight">
                Right Padding
                <input type="number" name="paddingRight" min="0" max="100" value={paddings[1]} onChange={this.updatePadding} />
              </label>
            </div>
            <div className="margin-controller margin-bottom-controller">
              <label htmlFor="paddingBottom">
                Bottom Padding
                <input type="number" name="paddingBottom" min="0" max="100" value={paddings[2]} onChange={this.updatePadding} />
              </label>
            </div>
            <div className="margin-controller margin-left-controller">
              <label htmlFor="paddingLeft">
                Left Padding
                <input type="number" name="paddingLeft" min="0" max="100" value={paddings[3]} onChange={this.updatePadding} />
              </label>
            </div>
          </div>
          <DeleteSection deleteSection={this.props.deleteSection} index={this.props.index}/>
        </div>
      </div>
    )
  }
}

export default EditTabSection;
