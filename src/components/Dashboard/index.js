import React from 'react';
import { connect } from 'react-redux';

import Pages from './Pages';
import NewPageForm from './NewPageForm';
import DeletePage from './DeletePage';
import Alert from '../Alert';
import Modal from '../Modal';

import { dashboardActions } from '../../actions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props)
    this.state = {
      pageURLToDelete: '',
      showAddPageModal: props.dashboard.showAddPageModal,
      showDeletePageModal: props.dashboard.showDeletePageModal,
      pages: []
    }

    this.getPages = this.getPages.bind(this);
    this.addPage = this.addPage.bind(this);
    this.deletePage = this.deletePage.bind(this);
    this.toggleAddPageModal = this.toggleAddPageModal.bind(this);
    this.toggleDeletePageModal = this.toggleDeletePageModal.bind(this);
  }

  componentDidMount() {
    this.getPages();
  }

  getPages() {
    this.props.getPages();
  }

  addPage(pageData) {
    // const { dispatch } = this.props;
    let pageDataToServer = {
      url: pageData.pageURL,
      title: pageData.pageTitle,
      style: "",
      private: pageData.isPrivate
    }
    this.props.addPage(pageDataToServer);
    // this.props.getPages();
  }

  deletePage() {
    // const { dispatch } = this.props;
    this.props.deletePage(this.state.pageURLToDelete);
  }

  toggleAddPageModal() {
    this.props.toggleAddPageModal();
  }

  toggleDeletePageModal(pageURL) {
    this.setState({
      pageURLToDelete: pageURL
    });

    this.props.toggleDeletePageModal();
  }


  render() {
    // console.log(this.props)
    return (
      <div className="page dashboard-page">
        <div className="page-header dashboard-header">
          <div className="page-title dashboard-title">
            Your pages
          </div>
        </div>
        <Alert />
        <Pages data={this.props.dashboard} onDelete={this.toggleDeletePageModal}/>
        <button className="cms-btn add-page" onClick={this.toggleAddPageModal}>
          New page
        </button>
        <Modal show={this.props.dashboard.showAddPageModal} onClose={this.toggleAddPageModal}>
          <NewPageForm onSubmit={this.addPage}/>
        </Modal>
        <Modal show={this.props.dashboard.showDeletePageModal} onClose={this.toggleDeletePageModal}>
          <DeletePage onDelete={this.deletePage} cancel={this.toggleDeletePageModal}/>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log(state);
  // const { dashboard } = state.dashboard;
  return {
    dashboard: state.dashboard
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPages: () => { dispatch(dashboardActions.getPages()) },
    addPage: (pageData) => { dispatch(dashboardActions.newPage(pageData)) },
    deletePage: (pageData) => { dispatch(dashboardActions.deletePage(pageData)) },
    toggleAddPageModal: () => { dispatch(dashboardActions.toggleAddPageModal()) },
    toggleDeletePageModal: () => { dispatch(dashboardActions.toggleDeletePageModal()) }
  }
}

const connectedDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard)
export default connectedDashboard;
