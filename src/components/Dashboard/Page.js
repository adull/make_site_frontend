import React from 'react';
import { Link } from 'react-router-dom';

class Page extends React.Component {
  constructor() {
    super();
    this.delete = this.delete.bind(this);
  }

  delete() {
    this.props.deleteClicked(this.props.url);
  }

  render(props) {
    return (
      <div className="page">
        <Link className="page-btn" to={"/edit-site/" + this.props.url}>
          {this.props.title}
        </Link>
        <button className="page-delete" onClick={this.delete}>
          Delete
        </button>
      </div>
    )
  }
}

export default Page;
