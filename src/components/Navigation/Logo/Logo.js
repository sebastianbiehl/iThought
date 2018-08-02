import React from 'react'
import iLogo from '../../../img/logo.png'
import './Logo.css'

const logo = props => (
  <div className="logo">
    <img src={iLogo} className="img-fluid" alt="iThought" />
  </div>
);

export default logo