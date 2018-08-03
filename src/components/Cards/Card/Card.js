import React from 'react'

import indexCard from '../../../img/karteikarte.jpg'
import './Card.css'

const onEnter = (event) => {
    if(event.which == 13) {
        event.preventDefault() 
        event.target.blur()
    }
}

const card = props => (
            <div className="card m-2" style={{width: "18rem", display: 'inline-block'}}>
                <img src={indexCard} alt="Karteikarte" className="card-img"/>
                <div className="card-img-overlay">
                    <h4 className="card-title">
                        <input placeholder="Titel eingeben ..." className="no-style" type="text" onBlur={()=> props.onSaved(props.title, props.body, props.id)} onChange={(event) => props.updateTitle(event.target.value, props.index)} value={props.title} onKeyPress={event => onEnter(event)}
                        />
                        <span className="exit text-muted" onClick={() => props.onDelete(props.id)}>
                            <i className="fas fa-times" />
                        </span>
                    </h4>
                    <p className="card-text"><textarea placeholder="Beschreibung eingeben ..." className="no-scroll" rows="5" cols="50" maxLength="145" className="no-style" type="text" onBlur={()=> props.onSaved(props.title, props.body, props.id)} onChange={(event) => props.updateBody(event.target.value, props.index)} value={props.body} onKeyPress={event => onEnter(event)} /></p>
                </div>
            </div>
        
);

export default card