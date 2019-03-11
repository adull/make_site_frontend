import React from 'react';

import PageSection from './sections/PageSection'


class EditPage extends React.Component {
  constructor() {
    super();
    this.state = {
      style: null
    }
    this.renderStyle = this.renderStyle.bind(this);
  }

  renderStyle() {

  }

  render() {
    if(this.props.style) {
      this.renderStyle();
      let sectionArr = [];
      for(let i = 0; i < this.props.style.sections.length; i ++) {
        sectionArr.push(
          <PageSection
            key={i}
            style={this.props.style.sections[i]}
            pageSectionIndex={i}
            updateText={this.props.updateTextSection}
            viewArr={this.props.viewArr}
            updateView={this.props.updateView}
          />
        );
      }
      let styles = {
        backgroundColor: this.props.style.background.color,
        marginTop: this.props.style.background.margin[0],
        marginRight: this.props.style.background.margin[1],
        marginBottom: this.props.style.background.margin[2],
        marginLeft: this.props.style.background.margin[3],
        paddingTop: this.props.style.background.padding[0],
        paddingRight: this.props.style.background.padding[1],
        paddingBottom: this.props.style.background.padding[2],
        paddingLeft: this.props.style.background.padding[3],
      }
      return (
        <div className="edit-page-root" style={styles}>
          {sectionArr}
        </div>
      )
    }
    else {
      return (
        <div className="loading"></div>
      )
    }
    // console.log(this.props.style)
  }
}

export default EditPage;
