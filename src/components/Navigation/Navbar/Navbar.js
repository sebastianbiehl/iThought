import React from 'react'

import Logo from '../Logo/Logo'
import Items from '../Items/Items'
import Toggle from '../Toggle/Toggle'

const navbar = props => (
  <nav className="navbar navbar-exand-sm mb-5 bg-warning navbar-light">
    <div className="container">
      <a className="navbar-brand" href="#">
        <Logo />
      </a>
      <Toggle />
      <div className="collapse navbar-collapse" id="navbarNav">
        <Items />
      </div>
    </div>
  </nav>
);

export default navbar