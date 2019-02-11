import React from 'react'
import { Link } from 'react-router-dom';


class HomepageComponent extends React.Component {
  render() {
    return (
      <div className="homepage">
        Welcome to the page creator on abdelrazaq.com
        <div className="homepage-links">
          <Link to="/login" className="button">Login</Link>
          <Link to="/register" className="button">Register</Link>
        </div>
      </div>
    );
  }
}

export default HomepageComponent;
