import React from 'react'

import Logo from '../Logo/Logo'

const navbar = props => (
  <nav className="navbar navbar-exand-sm mb-5 bg-warning navbar-light">
    <div className="container">
      <a className="navbar-brand" href="#">
        <Logo />
      </a>
    </div>
  </nav>
);

export default navbar