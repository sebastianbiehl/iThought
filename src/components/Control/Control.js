import React from 'react'

import './Control.css'



const control = props => {

const clearFilters = () => {
  props.changeTitle("")
  props.changeTag("")
  props.changeBody("")
}

return (
  <div className="form-inline mb-5 d-flex justify-content-center">
    {/* <button onClick={props.addCard} className="btn btn-warning btn-lg mb-sm">
      <i className="far fa-lightbulb mr-1" /> Neue Idee!
    </button> */}
    
    <input type="text" value={props.title} onChange={(event) => props.changeTitle(event.target.value)} className="form-control mb-sm mr-1" placeholder="Nach Titel filtern..."  />
    <input type="text" value={props.tag} onChange={(event) => props.changeTag(event.target.value)} className="form-control mb-sm mr-1" placeholder="Nach Tag filtern..." />
    <input type="text" value={props.body} onChange={(event) => props.changeBody(event.target.value)} className="form-control mb-sm mr-1" placeholder="Nach Text filtern..." />
    
        
<button type="button" class="btn btn-warning" onClick={clearFilters}>Filter zurücksetzen</button>
  </div>
)}

export default control