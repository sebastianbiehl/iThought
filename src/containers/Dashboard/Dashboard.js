import React, { Component } from 'react'

import Cards from '../../components/Cards/Cards'
import Control from '../../components/Control/Control'

class Dashboard extends Component {
  state = {
    cardCount: 0,
    category: "",
    title: ""
  };

  filterCategoryHandler = (cat) => {
      console.log(cat)
      this.setState({
          category: cat
      })
  };

  filterTitleHandler = (title) => {
      this.setState({
          title: title
      })
  };

  changeLoading = () => {
      this.setState({loading: false})
  }

  render() {
    return (
      <div className="container">
        <Control
          changeCategory={this.filterCategoryHandler}
          changeTitle={this.filterTitleHandler}
        />
        <Cards count={this.state.cardCount} categoryFilter={this.state.category} titleFilter={this.state.title}/>
      </div>
    );
  }
} 

export default Dashboard