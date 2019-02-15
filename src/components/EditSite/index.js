import React from 'react';
import { connect } from 'react-redux';

import { editSiteActions } from '../../actions';

class EditSite extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    let siteURL = props.match.params.siteURL
    console.log(this.props.getStyle(siteURL));
    console.log(props)
  }

  render() {
    if(this.props.editSite.style) {
      console.log(this.props.editSite.style.results)
      console.log(JSON.parse(this.props.editSite.style.results.getStyle))
    }
    return (
      <div>edit this bitch</div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    editSite: state.editSite
    // editSite: state.editSite.results.getStyle
    // style: JSON.parse(state.editSite.results.getStyle)
  }
}

function mapDispatchToProps(dispatch) {
  // console.log(this.props.match)
  return {
    addSection: () => { dispatch(editSiteActions.editSection()) },
    getStyle: (url) => { dispatch(editSiteActions.getStyle(url)) }
  }
}

const connectedEditSite = connect(mapStateToProps, mapDispatchToProps)(EditSite);

export default connectedEditSite;
