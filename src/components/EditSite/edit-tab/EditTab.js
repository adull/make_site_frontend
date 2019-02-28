import React from 'react';
import BackgroundEditor from './BackgroundEditor';
import EditTabSections from './EditTabSections';

class EditTab extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false
    }

    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className={"edit-tab " + (this.state.show ? "show" : "hide")}>
        <div className="edit-tab-header">
          <button className="cms-btn" onClick={this.toggleShow}>Hide edit tab</button>
        </div>
        <div className="edit-tab-controls">
          <BackgroundEditor style={this.props.style.background} updateBackground={this.props.updateBackground} postBackground={this.props.postBackground}/>
          <EditTabSections sections={this.props.style.sections}/>
        </div>
        <div className="show-btn" onClick={this.toggleShow}>Show edit tab</div>

      </div>

    )
  }
}

export default EditTab;
