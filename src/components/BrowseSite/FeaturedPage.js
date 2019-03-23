import React from 'react';

class FeaturedPage extends React.Component {
  render() {
    return (
      <a href={"/p/" + this.props.data.url} className="featured-page">
        <div className="featured-page-title">
          {this.props.data.title}
        </div>
        <div className="featured-page-author">
          By: {this.props.data.author}
        </div>
      </a>
    )
  }
}

export default FeaturedPage;
