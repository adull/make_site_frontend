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
    this.addSection = this.addSection.bind(this);
    this.deleteSection = this.deleteSection.bind(this);
    this.updateTextSection = this.updateTextSection.bind(this);
    this.updateTextSectionJSON = this.updateTextSectionJSON.bind(this);
    this.updateSiteBackground = this.updateSiteBackground.bind(this);

  }

  addSection(sectionType, sectionContent) {
    // console.log(this.state)
    let style = JSON.parse(this.props.editSite.style.results.getStyle);
    let formattedContent = sectionContent.replace(/"/g, "'");
    let newSection = {
      sectionType: sectionType,
      text: [{
        margin: [0, 0, 0, 0],
        padding: [0, 0, 0, 0],
        html: formattedContent,
      }]
    }
    style.sections.push(newSection);
    this.props.addSection(this.state.siteURL, style)
  }

  deleteSection(index) {
    // console.log(this.props)
    let pageStyle = JSON.parse(this.props.editSite.style.results.getStyle);
    let sections = pageStyle.sections;
    console.log(sections);
    sections.splice(index, 1);
    console.log(sections);
    pageStyle.sections = sections;
    // let pageStyleString = JSON.stringify(pageStyle);
    console.log(pageStyle)
    // console.log(sections)
    this.props.editSection(this.state.siteURL, pageStyle);
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
    let formattedText = text.replace(/"/g, "'");
    oldPageStyle.sections[index].text[0].html = formattedText;
    console.log(oldPageStyle);
    this.props.editSection(this.state.siteURL, oldPageStyle);
  }

  updateTextSectionJSON(index, json) {
    console.log(this.props.editSite.style.results.getStyle)
    console.log(json)
    let oldPageStyle = JSON.parse(this.props.editSite.style.results.getStyle);
    console.log(oldPageStyle)
    oldPageStyle.sections[index] = json;
    // console.log("this fires")
    // console.log(json)
    this.props.editSection(this.state.siteURL, oldPageStyle);
  }

  render() {
    // console.log(this.props)
    if(this.props.editSite.style) {
      let style = JSON.parse(this.props.editSite.style.results.getStyle);
      return (
        <div className="edit-site">
          <EditTab
            style={style}
            addSection={this.addSection}
            deleteSection={this.deleteSection}
            updateBackground={this.updateSiteBackground}
            postBackground={this.props.postSiteBackground}
            updateTextSection={this.updateTextSectionJSON}
          />
          <EditPage
            style={style}
            updateTextSection={this.updateTextSection}
            viewArr={this.props.editSite.viewArr}
            updateView={this.props.updateView}/>
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
    addSection: (siteURL, style) => { dispatch(editSiteActions.addSection(siteURL, style)) },
    deleteSection: (siteURL, sectionIndex) => { dispatch(editSiteActions.deleteSection(siteURL, sectionIndex)) },
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
