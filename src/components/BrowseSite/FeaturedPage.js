import React from 'react';
import { Link } from 'react-router-dom';

class FeaturedPage extends React.Component {
  render() {
    return (
      <Link className="featured-page" to={`${process.env.PUBLIC_URL}/p/${this.props.data.url}`}>
        <div className="featured-page-title">
          {this.props.data.title}
        </div>
        <div className="featured-page-author">
          By: {this.props.data.author}
        </div>
      </Link>
    )
  }
}

export default FeaturedPage;
