import React, { Component } from 'react';
// TODO: DETERMINE WHY WE NEED TO IMPORT ALL HERE FOR API_ROOT TO BE DEFINED
import * as apiConfigs from './api-config.js';
import './App.css';
import GameBoard from './components/GameBoard';
import SearchBar from './components/SearchBar';
import SearchModal from './components/SearchModal';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieChoices: [],
      searchValue: "Enter a movie title or series",
      showSearchModal: true
    }
  }

  updateSearch(e){
    this.setState({searchValue: e.target.value});
  }

  submitSearch(event){
    event.preventDefault;
    const searchUrl = `${apiConfigs.API_ROOT}/movie_search?query=` + encodeURI(this.state.searchValue);
    // TODO: ERROR HANDLING
    fetch(searchUrl).then((response) => response.json())
      .then((responseJson) => {
        const results = responseJson.results;
        if (results.length > 0) {
          // this.setState({movieChoices: results});
        } else {
          // TODO: MAKE THIS MORE SLICK
          alert("No movies found!");
        }
      })
  }

  // selectMovie(movieData, castData) {
  //   // Add correct field on cast member object for tracking.
  //   // TODO: REMOVE UNECESSARY OBJECT FIELDS
  //   castData.forEach(function(c) {c.correct = null;})
  //   this.setState({
  //     movieData: movieData,
  //     castData: castData,
  //     scrambledCast: this.scrambleCast(castData)
  //   });
  // }



  // TODO: MOVE TO CAST PICKER
  scrambleCast(castData){
    const castArray = castData.slice();
    // Fisher-Yates shuffle
    var remainingCount = castArray.length, top, index;
    while(remainingCount) {
      // Pick a random remaining element
      index = Math.floor(Math.random() * remainingCount--);
      // Swap it with the current element
      top = castArray[remainingCount];
      castArray[remainingCount] = castArray[index];
      castArray[index] = top;
    }
    // TODO: RETURN ONLY VALUES WE CARE ABOUT (ID, NAME)
    return castArray;
  }

  // registerPick(castMemberId, isCorrect){
  //   const castData = this.state.castData;
  //   const castMember = castData.filter(castMember => castMember.id === castMemberId)[0];
  //   castMember.correct = isCorrect;
  //   this.setState({castData: castData});
  //   this.checkForWinner();
  // }

  // checkForWinner() {
  //   if ( this.state.castData.map(castMember => castMember.correct).every(function(correct){ return correct === true}) ) {
  //     alert("You winnnnnnnnnn!!!!");
  //   }
  // }

  render() {
    const { showSearchModal } = this.state

    return (
      <div>
        <div id="gameContainer" className="container-fluid">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10 app">
              <button className="btn" onClick={() =>this.setState({showSearchModal: !showSearchModal})}>Search</button>
              {/* TODO: MOVE BIND THIS OUT OF RENDER */}
              <SearchModal open={showSearchModal} updateSearch={this.updateSearch.bind(this)} submitSearch={this.submitSearch.bind(this)} onClose={()=>this.setState({showSearchModal: false})}/>

              {/* <GameBoard movieChoices={this.state.movieChoices}/> */}
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
