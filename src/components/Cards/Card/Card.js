import React from 'react'

import indexCard from '../../../img/karteikarte.jpg'

const card = props => (
    <div className="card m-2" style={{width: "18rem", display: 'inline-block'}}>
        <img src={indexCard} alt="Karteikarte" className="card-img"/>
        <div className="card-img-overlay">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text">{props.body}</p>
            <p className="card-text"><small className="text-muted">Last updated 2 min</small></p>
        </div>
    </div>
);

export default card