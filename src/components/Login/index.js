import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import Alert from '../Alert';

import { userActions } from '../../actions';


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      validSubmission: false,
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const loginData = this.state;
    const { dispatch } = this.props;
    if (loginData.username && loginData.password) {
      this.setState({
        validSubmission: true
      })
      let userDataToServer = {
        username: loginData.username,
        password: loginData.password
      }
      dispatch(userActions.login(userDataToServer));
    }
  }

  render() {
    return (
      <div className="page login-page">
        <div className="page-title login-title">
          Log in
        </div>
        <Alert />
        <form name="form" className="user-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} autocomplete="off"/>
          </div>
          {this.state.submitted && !this.state.username &&
            <div className="help-block">Username is required</div>
          }
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} autocomplete="off"/>
          </div>
          {this.state.submitted && !this.state.password &&
            <div className="help-block">Password is required</div>
          }
          <div className="form-group">
            <button className="submit">Log in</button>
          </div>
          {this.state.submitted && this.state.validSubmission &&
              <div className="loading"></div>
          }
          <Link to={`${process.env.PUBLIC_URL}/register`} className="btn btn-link">Don't have an account? Register here</Link>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    // console.log({registering})
    return {
      registering
    }
}

const connectedLogin = connect(mapStateToProps)(Login);
export default connectedLogin;
