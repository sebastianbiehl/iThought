import React, { Component } from 'react'
import Card from './Card/Card'
import axios from '../../axios'

class cards extends Component {
    
    state = {
        loading: true,
        posts: null
    }

    render() {
        let cards = ''
        
        
        if (this.state.loading) {
            //Posts aus Datenbank laden
            axios
              .get("/ideas.json")
              .then(resp => {
                const updatedPosts = []
                for (let i in resp.data) {
                  updatedPosts.push({...resp.data[i]})
                }
                this.setState({loading: false,
                posts: updatedPosts})
              })
              .catch(err => {
                console.log(err);
              });
        } else {
            //Karten dynamisch generieren
            cards = this.state.posts.map((post, index) => <Card key={post.title + index} title={post.title} body={post.body} />)
        }

        return cards
    }
}


export default cards