import React, { Component } from 'react'

import axios from '../../axios'

import Cards from '../../components/Cards/Cards'
import Control from '../../components/Control/Control'
import './Dashboard.css'
import indexCard from '../../img/karteikarte.jpg'

class Dashboard extends Component {
  state = {
    title: "",
    body: "",
    tag: "",
    loading: true,
    posts: [],
    saved: false,
    updated: false
  };

  filterTitleHandler = (title) => {
      this.setState({
          title: title
      })
  };

  filterTagHandler = (tag) => {
      this.setState({
          tag: tag
      })
  };

    filterBodyHandler = (body) => {
        this.setState({
            body: body
        })
    };

  changeLoading = () => {
      this.setState({loading: false})
  }

  addCard = () => {
      axios
          .post("/ideas.json", {
                title: '',
                body: '',
                tags: [],
          })
          .then(response => {
              this.setState({posts: this.state.posts.concat({title: '', body: '', tags: [], updated: 'cat2', id: response.data.name })})
          })
          .catch(error => console.log(error));
  }

onLoadPosts = (posts) => {
    const arrayPosts = []
    for (let i in posts) {
        arrayPosts.push(posts[i])
    }
    
    this.setState({
        posts: arrayPosts,
        loading: false
    })
}

updateTitle = (title, key) => {
    const updatedPosts = [...this.state.posts]
    updatedPosts[key].title = title
    console.log(updatedPosts)
    this.setState({posts: updatedPosts, updated: true})
}

updateBody = (body, key) => {
    const updatedPosts = [...this.state.posts]
    updatedPosts[key].body = body
    this.setState({posts: updatedPosts, updated: true})
}

updateTags = (tag, key) => {
    const updatedPosts = [...this.state.posts]
    updatedPosts[key].tags = [...updatedPosts[key].tags, tag]
    this.setState({posts: updatedPosts, updated: true})
}

onSaved = (title, body, tags, id) => {
    if(this.state.updated)
    axios
          .put("/ideas/"+id+'.json', {
                title: title,
                body: body,
                tags: tags,
          })
          .then(response => {
              this.setState({saved: true, updated: false})
          })
          .catch(error => console.log(error));
}

onDelete = (id) => {
    axios
          .delete("/ideas/"+id+'.json')
          .then(response => {
              console.log('deleted')
              const updatedPosts = [...this.state.posts]
              const post = updatedPosts.find((element) => element.id === id)
              updatedPosts.splice(updatedPosts.indexOf(post), 1)
              this.setState({posts: updatedPosts})
          })
          .catch(error => console.log(error));
}

  render() {

    let saved = null

    if(this.state.saved) {
        saved = <div className="alert alert-success saved">Saved</div>
        setTimeout(() => {
            this.setState({saved: false})
        }, 2500)
    }

    return (
    <div>
      <div className="container">
        <Control
          changeTitle={this.filterTitleHandler}
          changeBody={this.filterBodyHandler}
          changeTag={this.filterTagHandler}
          body={this.state.body}
          title={this.state.title}
          tag={this.state.tag}
        />
         <Cards updateTitle={this.updateTitle} updateBody={this.updateBody} updateTags={this.updateTags} loadCards={this.onLoadPosts} posts={this.state.posts} loading={this.state.loading} onDelete={this.onDelete} onSaved={this.onSaved} bodyFilter={this.state.body} tagFilter={this.state.tag} titleFilter={this.state.title}/> 
            {!this.state.title && !this.state.body && !this.state.tag && (
            <div onClick={this.addCard} className="card m-2 addCard" style={{width: "19.5rem", display: 'inline-block'}}>
                <img src={indexCard} alt="Karteikarte" className="card-img"/>
                <div className="card-img-overlay">
                    <div className="card-text add text-muted">
                        <i className="fas fa-plus"></i>
                    </div>
                </div>
                </div>)}
                </div>
                {saved}
                </div>
    );
  }
} 

export default Dashboard