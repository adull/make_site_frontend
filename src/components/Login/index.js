import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    // console.log("submit bitch")
    e.preventDefault();
    console.log(this.state);
  }

  handleChange(e) {
    const {name, value} = e.target;
    console.log(e.target)
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="page login-page">
        <div className="form-title">
          Log in
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
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            {this.state.submitted && !this.state.password &&
              <div className="help-block">Password is required</div>
            }
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
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

export default Login;
