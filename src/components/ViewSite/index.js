import React from 'react';
import { connect } from 'react-redux';

import ViewPage from './ViewPage';
import { editSiteActions } from '../../actions';

import {Helmet} from "react-helmet";

class ViewSite extends React.Component {
  constructor(props) {
    super(props);
    let siteURL = props.match.params.siteURL;
    console.log(siteURL);
    this.state = {
      siteURL: siteURL,
    }
    document.title = siteURL;
    this.props.getStyle(siteURL);
  }

  render() {
    // console.log(this.props.editSite)
    if(this.props.editSite.style) {
      // console.log(this.props.editSite.style.results.getStyle)
      let style = JSON.parse(this.props.editSite.style.results.getStyle);
      let styleParse = this.props.editSite.style.results.getStyle;
      // console.log(style)
      // console.log(styleParse)
      return (
        <div className="view-site">
          <Helmet>
            <meta property="og:title" content={this.state.siteURL} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={`${process.env.PUBLIC_URL}/cms-api/get-social-image/${this.state.siteURL}`} />
            <meta property="og:url" content={`${process.env.PUBLIC_URL}/p/${this.state.siteURL}`} />
            <meta property="og:site_name" content="Adlai's Blog Site Mother Fucker" />
            <meta name="twitter:card" value="look at this cool site">
            <meta name="twitter:site" content="@aaddllaaii">
            <meta name="twitter:creator" content="@aaddllaaii">
            <meta name="twitter:title" content={this.state.siteURL} />
            <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/cms-api/get-social-image/${this.state.siteURL}`} />
          </Helmet>
          <ViewPage style={style} viewArr={this.props.editSite.viewArr}/>
        </div>
      )
    }
    else {
      return (
        <div className="loading"></div>
      )
    }
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return {
    editSite: state.editSite,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getStyle: (url) => { dispatch(editSiteActions.getStyle(url)) },
  }
}

const connectedViewSite = connect(mapStateToProps, mapDispatchToProps)(ViewSite);

export default connectedViewSite;
