import React from 'react';

class DeletePage extends React.Component {
  render() {
    return(
      <div className="delete-page-modal">
        <div className="confirm">
          Are you sure?
        </div>
        <div className="delete-page-buttons">
          <button className="submit" onClick={this.props.onDelete}>Yes</button>
          <button className="submit" onClick={this.props.cancel}>No</button>
        </div>
      </div>
    );
  }
}

export default DeletePage;
