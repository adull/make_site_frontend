import React from 'react';
import TextSubsection from './TextSubsection';
import ViewPageSection from './ViewPageSection';
import EditPageSection from './EditPageSection';
import EditPageImageSection from './EditPageImageSection';

class PageSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMode: true,
      editMode: false,
      showEditButton: false,
      view: props.view
    }
    this.toggleEditButton = this.toggleEditButton.bind(this);
    this.enterViewMode = this.enterViewMode.bind(this);
    this.enterEditMode = this.enterEditMode.bind(this);
    this.updateText = this.updateText.bind(this);
    this.updateViewToEdit = this.updateViewToEdit.bind(this);
    this.updateViewToView = this.updateViewToView.bind(this);
  }

  toggleEditButton() {
    this.setState({
      showEditButton: !this.state.showEditButton
    })
  }

  enterViewMode() {
    this.setState({
      viewMode: true,
      editMode: false,
    })
  }

  enterEditMode() {
    this.setState({
      viewMode: false,
      editMode: true,
    })
  }


  updateText(index, text) {
    this.props.updateText(this.props.pageSectionIndex, text)
  }

  updateViewToEdit() {
    console.log(this.props.style.sectionType);
    this.props.updateView('edit', this.props.pageSectionIndex);
  }

  updateViewToView() {
    this.props.updateView('view', this.props.pageSectionIndex);
  }

  render() {
    // console.log(this.props)
    let textSubsectionsArr = [];
    for(let i = 0; i < this.props.style.text.length; i ++ ) {
      textSubsectionsArr.push(<TextSubsection key={i} data={this.props.style.text[i]} />);
    }

    let editBtnStyle = {
      display: this.state.showEditButton ? "block" : "none"
    }

    let index = this.props.pageSectionIndex;
    let viewExists = this.props.viewArr[index] === ('view' || 'edit');
    let isView = this.props.viewArr[index] === 'view';
    let isImage = this.props.style.sectionType === 'image';
    // console.log(isImage);
    return (
      <div className={"section section-" + this.props.style.sectionType} onMouseEnter={this.toggleEditButton} onMouseLeave={this.toggleEditButton}>
        <div className="edit-btn" style={editBtnStyle} onClick={this.updateViewToEdit}>
          Edit
        </div>
        {
          isView ?
            <ViewPageSection
              pageSectionIndex = {this.props.pageSectionIndex}
              textSubsections={textSubsectionsArr}
              updateViewTo={this.props.updateView}/> :
              isImage ?
                <EditPageImageSection
                  pageSectionIndex = {this.props.pageSectionIndex}
                  textSubsections={textSubsectionsArr}
                  updateText={this.updateText}
                  updateView={this.updateViewToView}
                />
              :
              <EditPageSection
                // sectionType={this.props.style.sectionType}
                pageSectionIndex = {this.props.pageSectionIndex}
                textSubsections={textSubsectionsArr}
                updateText={this.updateText}
                updateView={this.updateViewToView} />
        }
      </div>
    );
  }
}

export default PageSection;
