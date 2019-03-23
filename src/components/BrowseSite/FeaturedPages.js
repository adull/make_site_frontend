import React from 'react';
import FeaturedPage from './FeaturedPage';

class FeaturedPages extends React.Component {
  render() {
    let featuredPageArr = [];
    for(let i = 0; i < this.props.pages.length; i ++) {
      featuredPageArr.push(<FeaturedPage data={this.props.pages[i]} key={i} />);
    }
    return (
      <div className="featured-pages">
        <div className="featured-pages-title">
          Featured Pages
        </div>
        <div className="featured-pages-links">
          {featuredPageArr}
        </div>
      </div>
    )
  }
}

export default FeaturedPages;
