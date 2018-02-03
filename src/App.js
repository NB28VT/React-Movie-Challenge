import React, { Component } from 'react';
import * as apiConfigs from './api-config.js';
import './App.css';
import GameBoard from './components/GameBoard';
import SearchModal from './components/SearchModal';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieChoices: [],
      searchValue: "",
      showSearchModal: true
    }
  }

  updateSearch(e){
    this.setState({searchValue: e.target.value});
  }

  submitSearch(event){
    this.setState({showSearchModal: false})
    event.preventDefault();
    const searchUrl = `${apiConfigs.API_ROOT}/movie_search?query=` + encodeURI(this.state.searchValue);

    fetch(searchUrl).then((response) => response.json())
      .then((responseJson) => {
        const results = responseJson.results;
        if (results.length > 0) {
          this.setState({movieChoices: results.slice(0,3)});
        } else {
          // TODO: MAKE THIS MORE SLICK
          alert("No movies found!");
        }
      })
  }

  reset() {
    this.setState({
      movieChoices: [],
      showSearchModal: true
    })
  }

  declareWinner() {
    // Show winner modal with reset button to try again
  }

  render() {
    if (this.state.movieChoices.length > 0) {
      return (<GameBoard movieChoices={this.state.movieChoices} reset={this.reset.bind(this)} declareWinner={this.declareWinner.bind(this)}/>)
    } else {
      return (
        <div>
          <SearchModal open={this.state.showSearchModal} updateSearch={this.updateSearch.bind(this)} submitSearch={this.submitSearch.bind(this)}/>
        </div>
      )
    }
  }
}

export default App;
