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
    this.updateStyle = this.updateStyle.bind(this);
  }

  toggleShow() {
    this.setState({
      show: !this.state.show
    })
  }

  updateStyle() {
    this.props.updateStyle()
  }

  render() {
    // console.log(this.props.style)
    return (
      <div className={"edit-tab " + (this.state.show ? "show" : "hide")}>
        <div className="edit-tab-header">
          <button className="cms-btn" onClick={this.toggleShow}>Hide edit tab</button>
        </div>
        <div className="edit-tab-controls">
          <BackgroundEditor
            style={this.props.style.background}
            updateBackground={this.props.updateBackground}
            postBackground={this.props.postBackground}
          />
          <EditTabSections
            sections={this.props.style.sections}
            addSection={this.props.addSection}
            addImageSection={this.props.addImageSection}
            deleteSection={this.props.deleteSection}
            updateTextSection={this.props.updateTextSection}/>
        </div>
        <div className="show-btn" onClick={this.toggleShow}>Show edit tab</div>
        <button className="cms-btn" onClick={this.updateStyle}>Update Page</button>

      </div>

    )
  }
}

export default EditTab;
