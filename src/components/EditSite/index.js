import React from 'react';
import { connect } from 'react-redux';

import EditTab from './edit-tab/EditTab';
import EditPage from './EditPage';

import { editSiteActions } from '../../actions';

class EditSite extends React.Component {
  constructor(props) {
    super(props);
    let siteURL = props.match.params.siteURL
    this.state = {
      siteURL: siteURL,
      // style: this.props.getStyle(siteURL)
    }
    this.props.getStyle(siteURL);
    this.updateTextSection = this.updateTextSection.bind(this);
    this.updateSiteBackground = this.updateSiteBackground.bind(this);
  }

  updateSiteBackground(backgroundJSON) {
    let editSiteStyle = this.props.editSite.style.results.getStyle;
    let editSiteStyleJSON = JSON.parse(editSiteStyle);
    editSiteStyleJSON.background = backgroundJSON;
    let editSiteStyleString = JSON.stringify(editSiteStyleJSON);
    let editSite = this.props.editSite.style;
    editSite.results.getStyle = editSiteStyleString
    this.props.updateSiteBackground(editSite);
  }

  updateTextSection(index, text) {
    let oldPageStyle = JSON.parse(this.props.editSite.style.results.getStyle);
    let formattedText = text.replace(/["]+/g, '\'')
    oldPageStyle.sections[index].text[0].html = formattedText;
    this.props.editSection(this.state.siteURL, oldPageStyle);
  }

  render() {
    // console.log(this.props)
    if(this.props.editSite.style) {
      let style = JSON.parse(this.props.editSite.style.results.getStyle);
      return (
        <div className="edit-site">
          <EditTab style={style} updateBackground={this.updateSiteBackground} postBackground={this.props.postSiteBackground}/>
          <EditPage style={style} updateTextSection={this.updateTextSection} viewArr={this.props.editSite.viewArr} updateView={this.props.updateView}/>
        </div>
      )
    }
    return (
      <div className="edit-site">
        <div className="loading"></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    editSite: state.editSite,
    viewArr: state.viewArr
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addSection: () => { dispatch(editSiteActions.editSection()) },
    editSection: (siteURL, index, text) => { dispatch(editSiteActions.editSection(siteURL, index, text)) },
    getStyle: (url) => { dispatch(editSiteActions.getStyle(url)) },
    updateSiteBackground: (style) => { dispatch(editSiteActions.updateSiteBackground(style)) },
    postSiteBackground: () => { dispatch(editSiteActions.postSiteBackground()) },
    updateSectionBackground: (backgroundJSON) => { dispatch(editSiteActions.updateSectionBackground(backgroundJSON)) },
    updateView: (viewArr, index) => { dispatch(editSiteActions.updateView(viewArr, index)) }
  }
}

const connectedEditSite = connect(mapStateToProps, mapDispatchToProps)(EditSite);

export default connectedEditSite;
