import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import SearchBar from './components/SearchBar';

class App extends Component {
  // TODO: SCRAMBLED CAST DATA SHOULD NOT BE IN STATE
  // TODO: SOME OF THESE DON'T NEED TO BE IN STATE
  constructor(props) {
    super(props)
    this.state = {
      movieChoices: [],
      movieUrl: "",
      actorsUrl: "",
      movieData: [],
      castData: [],
      selections: {},
      searchValue: ""
    }
  }

  updateMovieChoices(choices){
    this.setState({
      movieChoices: choices.slice(0,3),
      movieData: [],
      castData: []
    })
  }

  updateSearchValue(value){
    this.setState({searchValue: value})
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
          <div className="navbar-header"></div>
            <a className="navbar-brand" href="#">MovieMatcher5000</a>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10 app">
              <SearchBar updateSearchValue={this.updateSearchValue.bind(this)} updateMovieChoices={this.updateMovieChoices.bind(this)} searchValue={this.state.searchValue}/>
              <GameBoard castData={this.state.castData} movieChoices={this.state.movieChoices} updateMovieChoices={this.updateMovieChoices.bind(this)}/>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
