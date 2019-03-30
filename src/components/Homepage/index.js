import React from 'react'
import { Link } from 'react-router-dom';
import BrowseSite from '../BrowseSite'


class HomepageComponent extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage-title">Welcome to the page creator on abdelrazaq.com</div>
        <div className="homepage-links">
          <Link to={`${process.env.PUBLIC_URL}/login`} className="cms-btn">Login</Link>
          <Link to={`${process.env.PUBLIC_URL}/register`} className="cms-btn">Register</Link>
        </div>
        <BrowseSite />
      </div>
    );
  }
}

export default HomepageComponent;
