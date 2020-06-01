import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.png';
import fb from '../../img/fb.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/"><img src={logo} alt="Litteris" className="header-logo" /></Link>
        <a
          href="https://www.facebook.com/Litteris-1813790128730919/"
          target="_blank"
          rel="noopener noreferrer"
          className="fb-link-wrapper"
        >
          <img alt="Facebook" src={fb} className="fb-link" />
        </a>
      </div>
    );
  }
}

export default Header;
