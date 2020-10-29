import React, {useState, useRef} from 'react'

import indexCard from '../../../img/karteikarte.jpg'
import './Card.css'
import Tag from './Tag/Tag'

const onEnter = (event) => {
    if(event.which == 13) {
        event.preventDefault() 
        event.target.blur()
    }
}



const card = props => {
    const [createTag, setCreateTag] = useState(false);
    const [newTag, setNewTag] = useState("");
    const [inputWidth, setInputWidth] = useState("16px");
    const inputTag = useRef();
    function saveProps() {
        const tags = props.tags ? [...props.tags, newTag] : [newTag]
        props.onSaved(props.title, props.body, tags, props.id)
        props.updateTags(newTag, props.index);
        setNewTag("")
        setCreateTag(false)
        setInputWidth("16px")
    }
    const onCreateTag = () => {
        if(newTag !== "") saveProps();
    }
    const saveOnEnter = (event) => {
        if (event.keyCode === 13 && newTag !== "") {
            saveProps()
        }
    }

    const displayTag = (event) => {
        event.target.blur();
        inputTag.current.focus()
        setCreateTag(true); 
    }

    console.log(
    "here"
    )
    console.log(props.title)

    return (
            <div className="card m-2" style={{width: "19.5rem", display: 'inline-block'}}>
                <img src={indexCard} alt="Karteikarte" className="card-img"/>
                <div className="card-img-overlay">
                    <h4 className="card-title">
                        <input placeholder="Titel eingeben ..." className="no-style w-100" type="text" onBlur={()=> props.onSaved(props.title, props.body, props.tags, props.id)} onChange={(event) => props.updateTitle(event.target.value, props.index)} value={props.title} onKeyPress={event => onEnter(event)}
                        />
                        <span className="exit text-muted" onClick={() => props.onDelete(props.id)}>
                            <i className="fas fa-times" />
                        </span>
                    </h4>
                    <div className="card-text" style={{marginTop: '1.1rem'}}><textarea placeholder="Beschreibung eingeben ..." className="no-scroll" rows="4" cols="30" maxLength="112" className="no-style" type="text" onBlur={()=> props.onSaved(props.title, props.body, props.tags, props.id)} onChange={(event) => props.updateBody(event.target.value, props.index)} value={props.body} onKeyPress={event => onEnter(event)} />
                        <div className="mt-1">{props.tags?.map(tag => <Tag tagName={tag}/>)}
                        {<span class="badge badge-warning inputWrap" style={{display: !createTag && "none"}}><input ref={inputTag} style={{width: inputWidth}} onKeyPress={(event) => setInputWidth((event.target.value.length + 1) * 8 + "px")} onKeyDown={saveOnEnter} value={newTag} onChange={(event) => setNewTag(event.target.value)} className="no-style inputTag" onBlur={onCreateTag} type="text"/></span>}
                        {<button type="button" onClick={displayTag} class="btn btn-warning ml-2">+</button>}
                        </div>
                        </div>
                </div>
            </div>
        
    )};

export default card