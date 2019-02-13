import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import YourPages from './YourPages';
import NewPageForm from './NewPageForm';
import Modal from '../Modal';

import { dashboardActions } from '../../actions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddPageModal: false,
      pages: []
    }

    this.addPage = this.addPage.bind(this);
    this.toggleAddPageModal = this.toggleAddPageModal.bind(this);
  }

  componentDidMount() {
    this.props.getPages();
  }

  addPage(pageData) {
    const { dispatch } = this.props;
    let pageDataToServer = {
      url: pageData.pageURL,
      title: pageData.pageTitle,
      style: "",
      private: pageData.isPrivate
    }
    this.props.addPage(pageDataToServer);
    this.props.getPages();
  }

  toggleAddPageModal() {
    this.setState({
      showAddPageModal: !this.state.showAddPageModal
    });
  }


  render() {
    // console.log(this.props)
    return (
      <div className="page dashboard-page">
        <div className="page-header">
          <div className="page-title dashboard-title">
            Your pages
          </div>
          <button className="add-page" onClick={this.toggleAddPageModal}>
            Add page
          </button>
        </div>
        <YourPages data={this.props.dashboard}/>
        <Modal show={this.state.showAddPageModal} onClose={this.toggleAddPageModal}>
          <NewPageForm onSubmit={this.addPage}/>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { dashboard } = state.dashboard;
  return {
    dashboard: state.dashboard
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPages: () => {dispatch(dashboardActions.getPages()) },
    addPage: (pageData) => {dispatch(dashboardActions.newPage(pageData)) }
  }
}

const connectedDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard)
export default connectedDashboard;
