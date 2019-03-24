import React from 'react';
import FeaturedPages from './FeaturedPages';
import AllPages from './AllPages';
import { connect } from 'react-redux';

import { browseSiteActions } from '../../actions';

class BrowseSite extends React.Component {
  constructor(props) {
    super(props);
    this.props.getFeaturedPages();
    this.props.getAllPages();
    // console.log(this.props)
  }


  render() {
    console.log(this.props)
    return (
      <div className="browse-site">
        <div className="browse-site-title">
          Browse the site
        </div>
        {this.props.featuredSites ?
          <FeaturedPages pages={this.props.featuredSites} /> :
          <span>
            <div className="loading"></div><span>Loading Featured Pages...</span>
          </span>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log(state)
  const { browseSite } = state.browseSite;
  // console.log(brow)
  console.log(state.browseSite)
  return state.browseSite;
}

function mapDispatchToProps(dispatch) {
  return {
    getFeaturedPages: () => { dispatch(browseSiteActions.getFeaturedPages()) },
    getAllPages: () => { dispatch(browseSiteActions.getAllPages()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseSite);
