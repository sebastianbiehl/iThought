import React from 'react'
import Card from './Card/Card'
import axios from '../../axios'

const cards = (props) => {
    let posts = null
    let updatedPosts
    props.posts ? updatedPosts = [...props.posts] : updatedPosts = []
    if (props.loading) {
        //Posts aus Datenbank laden
        axios
            .get("/ideas.json")
            .then(resp => {
                
                for (let i in resp.data) {
                    updatedPosts.push({ ...resp.data[i], id: i })
                }
                props.loadCards(updatedPosts)
            })
            .catch(err => {
                console.log(err);
            })
    } else {
        //Karten dynamisch generieren
        posts = updatedPosts.map((post, index) => {
            if(post.title.includes(props.titleFilter)) {
                    return <Card onSaved={props.onSaved} onDelete={props.onDelete} updateTitle={props.updateTitle} updateBody={props.updateBody} key={post.id} index={index} id={post.id} title={post.title} body={post.body} />
                }
        }
        )
    }
    return posts
}


export default cards