import React from 'react';
import { connect } from 'react-redux';

import EditTab from './EditTab';
import EditPage from './EditPage';

import { editSiteActions } from '../../actions';

class EditSite extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    let siteURL = props.match.params.siteURL
    this.state = {
      siteURL: siteURL
    }
    this.props.getStyle(siteURL);

    this.updateTextSection = this.updateTextSection.bind(this);
  }

  updateTextSection(index, text) {
    let oldPageStyle = JSON.parse(this.props.editSite.style.results.getStyle);
    let formattedText = text.replace(/['"]+/g, '')
    oldPageStyle.sections[index].text[0].html = formattedText;
    this.props.editSection(this.state.siteURL, oldPageStyle);
  }

  render() {
    if(this.props.editSite.style) {
      // console.log(JSON.parse(this.props.editSite.style.results.getStyle))
      let style = JSON.parse(this.props.editSite.style.results.getStyle);
      return (
        <div className="edit-site">
          <EditTab />
          <EditPage style={style} updateTextSection={this.updateTextSection}/>
        </div>
      )
    }
    return (
      <div className="edit-site">
        <EditTab />
        <EditPage style={null}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log(state.editSite)
  return {
    editSite: state.editSite
  }
  // return {state.editSite};

}

function mapDispatchToProps(dispatch) {
  // console.log(this.props.match)
  return {
    addSection: () => { dispatch(editSiteActions.editSection()) },
    editSection: (siteURL, index, text) => { dispatch(editSiteActions.editSection(siteURL, index, text)) },
    getStyle: (url) => { dispatch(editSiteActions.getStyle(url)) }
  }
}

const connectedEditSite = connect(mapStateToProps, mapDispatchToProps)(EditSite);

export default connectedEditSite;
