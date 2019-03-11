import React from 'react';

class AddSection extends React.Component {
  constructor() {
    super();
    this.addSection = this.addSection.bind(this);
  }

  addSection() {
    console.log("add section")
  }

  render() {
    return (
      <button className="cms-btn" onClick={this.addSection}>Add Section</button>
    )
  }
}

export default AddSection;
