import React from 'react';

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
    console.log(this.props.style)
    return (
      <div className={"edit-tab " + (this.state.show ? "show" : "hide")}>
        <div className="edit-tab-header">
          <button className="cms-btn" onClick={this.toggleShow}>Hide edit tab</button>
        </div>
        <div className="show-btn" onClick={this.toggleShow}>Show edit tab</div>
      </div>

    )
  }
}

export default EditTab;
