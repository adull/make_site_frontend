import React from 'react';
import Modal from '../../../Modal';

import AddSectionTextEditor from './AddSectionTextEditor';
import AddSectionImageAdder from './AddSectionImageAdder';


class AddSection extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      sectionToAdd: 'text',
      contentToAdd: ''
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addSection = this.addSection.bind(this);
    this.updateText = this.updateText.bind(this);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  handleChange(event) {
    this.setState({
      sectionToAdd: event.target.value
    });
  }

  addSection(event) {
    event.preventDefault();
    console.log(this)
    this.props.addSection(this.state.sectionToAdd, this.state.contentToAdd);

  }

  updateText(html) {
    // console.log(html)
    this.setState({
      contentToAdd: html
    })
  }

  render() {
    return (
      <div className="add-section-wrapper">
        <button className="cms-btn" onClick={this.toggleModal}>Add Section</button>
        <Modal show={this.state.showModal} className="add-section-modal" onClose={this.toggleModal}>
          <div className="add-section-modal-title">
            Add Section
          </div>
          <form className="add-section-options" onSubmit={this.addSection}>
            <label htmlFor="section-type-select">
              Choose a section type
            </label>
            <select className="section-type-select" onChange={this.handleChange}>
              <option value="text">Text</option>
              <option value="image">Image</option>
            </select>
            {this.state.sectionToAdd === 'text' ?
              <AddSectionTextEditor updateText={this.updateText} /> :
              <AddSectionImageAdder />
            }
            <input type="submit" value="Submit" />
          </form>
        </Modal>
      </div>
    )
  }
}

export default AddSection;
