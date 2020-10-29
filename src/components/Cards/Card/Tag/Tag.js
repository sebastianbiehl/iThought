import React from 'react'

const tag = props => {
    return (
            <span class="badge badge-warning ml-1" style={{height: '1.3rem'}}>{props.tagName}</span>
)};

export default tag