import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import SearchBar from './components/SearchBar';
import SearchModal from './components/SearchModal';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieChoices: [],
      movieData: [],
      castData: [],
      scrambledCast: [],
      searchValue: "Enter a movie title or series",
      showSearchModal: true
    }
  }

  updateMovieChoices(choices){
    // Reset all data
    this.setState({
      movieChoices: choices.slice(0,3),
      movieData: [],
      castData: [],
      scrambledCast: []
    })
  }

  submitSearch(event){
    this.setState({searchValue: event.target.value})
  }

  selectMovie(movieData, castData) {
    // Add correct field on cast member object for tracking.
    // TODO: REMOVE UNECESSARY OBJECT FIELDS
    castData.forEach(function(c) {c.correct = null;})
    this.setState({
      movieData: movieData,
      castData: castData,
      scrambledCast: this.scrambleCast(castData)
    });
  }

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

  registerPick(castMemberId, isCorrect){
    const castData = this.state.castData;
    const castMember = castData.filter(castMember => castMember.id === castMemberId)[0];
    castMember.correct = isCorrect;
    this.setState({castData: castData});
    this.checkForWinner();
  }

  checkForWinner() {
    if ( this.state.castData.map(castMember => castMember.correct).every(function(correct){ return correct === true}) ) {
      alert("You winnnnnnnnnn!!!!");
    }
  }

  render() {
    const { showSearchModal } = this.state

    return (
      <div>
        <div id="gameContainer" className="container-fluid">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10 app">
              <button className="btn" onClick={() =>this.setState({showSearchModal: !showSearchModal})}>
              Search</button>
              <SearchModal open={showSearchModal}
                submitSearch={this.submitSearch.bind(this)}
                onClose={()=>this.setState({showSearchModal: false})
              }/>

              {/* <SearchBar updateSearchValue={this.updateSearchValue.bind(this)} updateMovieChoices={this.updateMovieChoices.bind(this)} searchValue={this.state.searchValue}/> */}
              <GameBoard  castData={this.state.castData} scrambledCast={this.state.scrambledCast} movieChoices={this.state.movieChoices} selectMovie={this.selectMovie.bind(this)} registerPick={this.registerPick.bind(this)}/>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
