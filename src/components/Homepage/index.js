import React from 'react'
import { Link } from 'react-router-dom';


class HomepageComponent extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage-title">Welcome to the page creator on abdelrazaq.com</div>
        <div className="homepage-links">
          <Link to="/login" className="homepage-link">Login</Link>
          <Link to="/register" className="homepage-link">Register</Link>
        </div>
      </div>
    );
  }
}

export default HomepageComponent;
