import React from 'react';
import { connect } from 'react-redux';

import ViewPage from './ViewPage';
import { editSiteActions } from '../../actions';

class ViewSite extends React.Component {
  constructor(props) {
    super(props);
    let siteURL = props.match.params.siteURL;
    console.log(siteURL);
    this.state = {
      siteURL: siteURL,
    }
    this.props.getStyle(siteURL);
  }

  render() {
    console.log(this.props.editSite)
    if(this.props.editSite.style) {
      console.log(this.props.editSite.style.results.getStyle)
      let style = JSON.parse(this.props.editSite.style.results.getStyle);
      let styleParse = this.props.editSite.style.results.getStyle;
      // console.log(style)
      // console.log(styleParse)
      return (
        <div className="view-site">
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
  console.log(state);
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
