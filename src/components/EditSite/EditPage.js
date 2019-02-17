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
    // console.log
    // return "haha";
    // console.log(this.props.style);
  }

  render() {
    if(this.props.style) {
      this.renderStyle();
      let sectionArr = [];
      for(let i = 0; i < this.props.style.sections.length; i ++) {
        sectionArr.push(<PageSection key={i} style={this.props.style.sections[i]} pageSectionIndex={i} />);
      }
      return (
        <div className="edit-page-root" style={{backgroundColor: this.props.style.background.color}}>
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
