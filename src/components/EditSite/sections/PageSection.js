import React from 'react';
import TextSubsection from './TextSubsection';
import ViewPageSection from './ViewPageSection'
import EditPageSection from './EditPageSection'

class PageSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMode: true,
      editMode: false,
      showEditButton: false,
    }
    // console.log(props.style);
    this.toggleEditButton = this.toggleEditButton.bind(this);
    this.enterViewMode = this.enterViewMode.bind(this);
    this.enterEditMode = this.enterEditMode.bind(this);
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

  render() {
    let textSubsectionsArr = [];
    // console.log(this.props.style.text)
    for(let i = 0; i < this.props.style.text.length; i ++ ) {
      textSubsectionsArr.push(<TextSubsection key={i} data={this.props.style.text[i]} />);
    }

    let editBtnStyle = {
      display: this.state.showEditButton ? "block" : "none"
    }
    return (
      <div className={"section section-" + this.props.style.sectionType} onMouseEnter={this.toggleEditButton} onMouseLeave={this.toggleEditButton}>
        <div className="edit-btn" style={ editBtnStyle } onClick={this.enterEditMode}>
          Edit
        </div>
        {this.state.viewMode ? <ViewPageSection textSubsections={textSubsectionsArr} /> : <EditPageSection textSubsections={textSubsectionsArr} />}
      </div>
    );
  }
}

export default PageSection;
