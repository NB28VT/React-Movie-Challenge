import React, { Component } from 'react';
import * as apiConfigs from './api-config.js';
import './App.css';
import GameBoard from './components/GameBoard';
// import SearchModal from './components/SearchModal';
var Modal = require('react-bootstrap-modal')

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

  render() {
    // const { showSearchModal } = this.state


    if (this.state.movieChoices.length > 0) {
      return (
        <div>
          <div id="gameContainer" className="container-fluid">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10 app">
                <GameBoard movieChoices={this.state.movieChoices}/>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
      )
    } else {
      <div>
          <SearchModal open={this.state.showSearchModal} updateSearch={this.updateSearch.bind(this)} submitSearch={this.submitSearch.bind(this)} onClose={()=>this.setState({showSearchModal: false})}/>
      </div>
      // Old modal
      // return(
      //   <div>
      //     <button className="btn" onClick={() =>this.setState({showSearchModal: !showSearchModal})}>Search</button>
      //     <SearchModal open={showSearchModal} updateSearch={this.updateSearch.bind(this)} submitSearch={this.submitSearch.bind(this)} onClose={()=>this.setState({showSearchModal: false})}/>
      //   </div>
      // )
    }
  }
}

export default App;
