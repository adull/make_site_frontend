import React from 'react';
import { Link } from 'react-router-dom';

class Page extends React.Component {
  render(props) {
    return (
      <Link className="page" to={"/edit-site/" + this.props.url}>
        {this.props.title}
      </Link>
    )
  }
}

export default Page;
