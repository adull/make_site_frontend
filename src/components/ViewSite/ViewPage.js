import React from 'react';

import PageSection from '../EditSite/sections/PageSection';

class ViewPage extends React.Component {
  render() {
    if(this.props.style) {
      console.log(this.props.style.sections)
      let sectionArr = [];
      for(let i = 0; i < this.props.style.sections.length; i ++) {
        sectionArr.push(
          <PageSection
            key={i}
            style={this.props.style.sections[i]}
            pageSectionIndex={i}
            viewArr={this.props.viewArr}
          />
        )
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
        <div className="view-page-root" style={styles}>
          {sectionArr}
        </div>
      );
    }
  }
}

export default ViewPage;
