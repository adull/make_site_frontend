import React from 'react';
import { Link } from 'react-router-dom';
import { userActions } from '../../actions';

import { connect } from 'react-redux';

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
    // const { user } = this.state;
    let user = this.state;
    const { dispatch } = this.props;
    if (user.username && user.password && user.repeatedPassword) {
        dispatch(userActions.register(user));
    }
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="page register-page">
        <div className="form-title">
          Sign up
        </div>
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
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            {this.state.submitted && !this.state.password &&
              <div className="help-block">Password is required</div>
            }
          </div>
          <div className="form-group">
            <label htmlFor="username">Repeat Password</label>
            <input type="password" name="repeatedPassword" value={this.state.repeatedPassword} onChange={this.handleChange} />
            {this.state.submitted && !this.state.repeatedPassword &&
              <div className="help-block">Repeated password is required</div>
            }
          </div>
          <div className="form-group">
            <label htmlFor="username">Email (not required, but can be used to reset your password)</label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Register</button>
            {this.props &&
                <div className="loading"></div>
            }
            <Link to="/register" className="btn btn-link">Register</Link>
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
    };
}

const connectedRegister = connect(mapStateToProps)(Register);
export default connectedRegister;
