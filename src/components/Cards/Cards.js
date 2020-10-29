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
            .get("/notes")
            .then(resp => {
                console.log(resp.data)
                for (let i in resp.data) {
                    resp.data[i]
                    updatedPosts.push({ ...resp.data[i]})
                }
                props.loadCards(updatedPosts)
            })
            .catch(err => {
                console.log(err);
            })
    } else {
        //Karten dynamisch generieren
        posts = updatedPosts.map((post, index) => {
            if (post.title.includes(props.titleFilter) && post.body.includes(props.bodyFilter) && (props.tagFilter === "" || post.tags?.includes(props.tagFilter))) {
                    return <Card onSaved={props.onSaved} onDelete={props.onDelete} updateTitle={props.updateTitle} updateBody={props.updateBody} updateTags={props.updateTags} key={post.id} index={index} id={post._id} title={post.title} body={post.body} tags={post.tags} />
                }
        }
        )
    }
    return posts
}


export default cards