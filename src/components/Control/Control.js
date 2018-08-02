import React from 'react'

import './Control.css'

const control = props => (
  <div className="form-inline mb-5 d-flex justify-content-around">
    <button className="btn btn-warning btn-lg mb-sm">
      <i className="far fa-lightbulb mr-1" /> Neue Idee!
    </button>
    <input type="text" onChange={(event) => props.changeTitle(event.target.value)} className="form-control mr-3 mb-sm" placeholder="Nach Titel suchen..."  />
    <select onChange={(event) => props.changeCategory(event.target.value)} className="form-control" name="category" id="cat" >
      {/* <option className="form-control bg-white text-muted" value="Freizeit" disabled selected>
        Nach Kategorie filtern
      </option> */}
      <option className="form-control" value="Freizeit">
        Kategorie 1
      </option>
      <option className="form-control" value="Freizeit2">
        Kategorie 2
      </option>
    </select>
  </div>
);

export default control