import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Alert from '../Alert';

import { userActions } from '../../actions';


class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      repeatedPassword: '',
      email: '',
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    // console.log("submit bitch")
    e.preventDefault();

    this.setState({ submitted: true });
    const user = this.state;
    const { dispatch } = this.props;
    if (user.username && user.password && user.password === user.repeatedPassword) {
        let userDataToServer = {
          username: user.username,
          password: user.password,
          email: user.email
        }
        dispatch(userActions.register(userDataToServer));
    }
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    let passwordsSame = this.state.password !== this.state.repeatedPassword;
    // console.log(this.props)
    // console.log(this.state)
    return (
      <div className="page register-page">
        <div className="form-title">
          Sign up
        </div>
        <Alert />
        <form name="form" className="user-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
            {this.state.submitted && !this.state.username &&
              <div className="help-block">Username is required</div>
            }
          </div>
          <div className="form-group">
            <label htmlFor="username">Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className={passwordsSame ? "red-input": ""} />
            {this.state.submitted && !this.state.password &&
              <div className="help-block">Password is required</div>
            }
          </div>
          <div className="form-group">
            <label htmlFor="username">Repeat Password</label>
            <input type="password" name="repeatedPassword" value={this.state.repeatedPassword} onChange={this.handleChange} className={passwordsSame ? "red-input": ""}/>
            {this.state.submitted && !this.state.repeatedPassword &&
              <div className="help-block">Repeated password is required</div>
            }
            {passwordsSame && this.state.submitted &&
              <div className="help-block">Passwords must be the same</div>
            }
          </div>
          <div className="form-group">
            <label htmlFor="username">Email (not required, but can be used to reset your password)</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Register</button>
            {this.props &&
                <div className="loading"></div>
            }
            <Link to="/login" className="btn btn-link">Log in</Link>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
      registering
    }
}

const connectedRegister = connect(mapStateToProps)(Register);
export default connectedRegister;
