import React, { Component } from 'react';
import * as apiConfigs from './api-config.js';
import GameBoard from './components/GameBoard';
import SearchModal from './components/SearchModal';
import SuccessModal from './components/SuccessModal';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieChoices: [],
      searchValue: "",
      showSearchModal: true,
      showSuccessModal: false
    }
  }

  updateSearch(e){
    this.setState({searchValue: e.target.value});
  }

  submitSearch(event){
    event.preventDefault();
    const searchUrl = `${apiConfigs.API_ROOT}/movie_search?query=` + encodeURI(this.state.searchValue);

    fetch(searchUrl).then((response) => response.json())
      .then((responseJson) => {
        const results = responseJson.results;
        if (results.length > 0) {
          this.setState({
            movieChoices: results.slice(0,3),
            showSearchModal: false,
            showSuccessModal: false
          });
        } else {
          // TODO: MAKE THIS MORE SLICK
          alert("No movies found!");
        }
      })
  }

  declareWinner(){
    this.setState({
      movieChoices: [],
      showSuccessModal: true
    })
  }

  resetGame() {
    this.setState({
      movieChoices: [],
      showSearchModal: true
    })
  }

  render() {
    return(
      <div>
        <SuccessModal show={this.state.showSuccessModal} updateSearch={this.updateSearch.bind(this)} submitSearch={this.submitSearch.bind(this)}/>
        <SearchModal show={this.state.showSearchModal} updateSearch={this.updateSearch.bind(this)} submitSearch={this.submitSearch.bind(this)}/>
        <GameBoard movieChoices={this.state.movieChoices} declareWinner={this.declareWinner.bind(this)} resetGame={this.resetGame.bind(this)}/>
      </div>
    )
  }
}

export default App;
