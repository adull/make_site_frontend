import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';


import Homepage from '../components/Homepage';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import Register from '../components/Register';
import EditSite from '../components/EditSite';
import ViewSite from '../components/ViewSite';

import { alertActions } from '../actions';
import { history } from '../helpers';


class Routes extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    })
  }
  render() {
    console.log(process.env.PUBLIC_URL);
    console.log(`${process.env.PUBLIC_URL}/login`)
    return(
      <Router basename={'/sites'} history={history}>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          // <Route path="/dashboard" render={(_props) => <Dashboard />} />
          <Route path={`${process.env.PUBLIC_URL}/dashboard`} render={(_props) => <Dashboard />} />
          // <Route path="/login" component={Login} />
          <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          // <Route path="/register" component={Register} />
          <Route path={`${process.env.PUBLIC_URL}/register`} component={Register} />
          // <Route path="/edit-site/:siteURL" component={EditSite} />
          <Route path={`${process.env.PUBLIC_URL}/edit-site/:siteURL`} component={EditSite} />
          // <Route path="/p/:siteURL" component={ViewSite} />
          <Route path={`${process.env.PUBLIC_URL}/p/:siteURL`} component={ViewSite} />
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

export default connect(mapStateToProps)(Routes);
