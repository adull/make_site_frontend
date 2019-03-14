import React from 'react';
import Modal from '../../../Modal';

import AddSectionTextEditor from './AddSectionTextEditor';
import AddSectionImageAdder from './AddSectionImageAdder';

function randomID() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 15; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


class AddSection extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      sectionToAdd: 'text',
      contentToAdd: '',
      imageToAdd: null
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addSection = this.addSection.bind(this);
    // this.addImageSection = this.addImageSection.bind(this);
    this.updateText = this.updateText.bind(this);
    this.updateImageToAdd = this.updateImageToAdd.bind(this);
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
    if(this.state.sectionToAdd === 'text') {
      this.props.addSection(this.state.sectionToAdd, this.state.contentToAdd);
    }
    else if(this.state.sectionToAdd === 'image') {
      let imageID = randomID();
      this.props.addImageSection(imageID, this.state.imageToAdd)
    }

    this.toggleModal();

  }

  updateText(html) {
    // console.log(html)
    this.setState({
      contentToAdd: html
    })
  }

  updateImageToAdd(image) {
    console.log(image)
    this.setState({
      imageToAdd: image
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
              <div className="text-editor-wrapper">
                <AddSectionTextEditor updateText={this.updateText} />
              </div> :
              <div className="image-adder-wrapper">
                <AddSectionImageAdder updateImage={this.updateImageToAdd} />
              </div>
            }
            <input className="cms-btn" type="submit" value="Submit" />
          </form>
        </Modal>
      </div>
    )
  }
}

export default AddSection;
