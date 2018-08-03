import React, { Component } from 'react'

import axios from '../../axios'

import Cards from '../../components/Cards/Cards'
import Control from '../../components/Control/Control'
import './Dashboard.css'
import indexCard from '../../img/karteikarte.jpg'

class Dashboard extends Component {
  state = {
    title: "",
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

  changeLoading = () => {
      this.setState({loading: false})
  }

  addCard = () => {
      axios
          .post("/ideas.json", {
                title: '',
                body: ''
          })
          .then(response => {
              this.setState({posts: this.state.posts.concat({title: '', body: '', updated: 'cat2', id: response.data.name })})
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

onSaved = (title, body, id) => {
    if(this.state.updated)
    axios
          .put("/ideas/"+id+'.json', {
                title: title,
                body: body
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
      <div className="container">
        {saved}
        <Control
          changeTitle={this.filterTitleHandler}
        />
         <Cards updateTitle={this.updateTitle} updateBody={this.updateBody}  loadCards={this.onLoadPosts} posts={this.state.posts} loading={this.state.loading} onDelete={this.onDelete} onSaved={this.onSaved} titleFilter={this.state.title}/> 
            <div onClick={this.addCard} className="card m-2 addCard" style={{width: "18rem", display: 'inline-block'}}>
                <img src={indexCard} alt="Karteikarte" className="card-img"/>
                <div className="card-img-overlay">
                    <div className="card-text add text-muted">
                        <i className="fas fa-plus"></i>
                    </div>
                   
                </div>
        </div>
      </div>
    );
  }
} 

export default Dashboard