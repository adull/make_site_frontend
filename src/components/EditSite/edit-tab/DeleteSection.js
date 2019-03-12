import React from 'react';
import Modal from '../../Modal'

class DeleteSection extends React.Component {
  constructor() {
    super();
    this.state = {
      deleteModalOpen: false
    }
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    this.deleteSection = this.deleteSection.bind(this);
  }

  toggleDeleteModal() {
    this.setState({
      deleteModalOpen: !this.state.deleteModalOpen
    })
  }

  deleteSection() {
    console.log(this.props.index);
    this.props.deleteSection(this.props.index);
  }

  render() {
    return (
      <div className="delete-section" onClick={this.toggleDeleteModal}>
        Delete Section
        <Modal show={this.state.deleteModalOpen} onClose={this.toggleDeleteModal}>
          <button className="cms-btn" onClick={this.deleteSection}>
            Delete Modal
          </button>
        </Modal>
      </div>
    )
  }
}

export default DeleteSection;
