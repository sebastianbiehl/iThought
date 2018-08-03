import React from 'react'

import './Control.css'

const control = props => (
  <div className="form-inline mb-5 d-flex justify-content-around">
    {/* <button onClick={props.addCard} className="btn btn-warning btn-lg mb-sm">
      <i className="far fa-lightbulb mr-1" /> Neue Idee!
    </button> */}
    
    <input type="text" onChange={(event) => props.changeTitle(event.target.value)} className="form-control mb-sm" placeholder="Nach Titel suchen..."  />
  </div>
);

export default control