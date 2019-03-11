import React from 'react';
import EditTabSection from './EditTabSection';
import AddSection from './AddSection';

class EditTabSections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSectionsOpen: false
    }

    this.togglePageSectionsOpen = this.togglePageSectionsOpen.bind(this);
  }

  togglePageSectionsOpen() {
    this.setState({
      pageSectionsOpen: !this.state.pageSectionsOpen
    })
  }

  render() {
    let tabSectionArr = []
    for(let i = 0; i < this.props.sections.length; i ++) {
      tabSectionArr.push(
        <EditTabSection
          sectionData={this.props.sections[i]}
          updateTextSection = {this.props.updateTextSection}
          index={i}
          key={i}
        />
      );
    }
    return (
      <div className="edit-sections-wrapper">
        <div className="edit-sections-title" onClick={this.togglePageSectionsOpen}>
          Page Sections
          <div className={this.state.pageSectionsOpen ? "editor-toggle-triangle open":"editor-toggle-triangle close"}></div>
        </div>
        <div className={this.state.pageSectionsOpen ? "edit-sections open" : "edit-sections close"}>
          {tabSectionArr}
          <AddSection />
        </div>
      </div>
    );
  }
}

export default EditTabSections;
