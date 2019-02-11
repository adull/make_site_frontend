import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Homepage from '../components/Homepage';
import Login from '../components/Login';
import Register from '../components/Register';

class Routes extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/dashboard" component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
