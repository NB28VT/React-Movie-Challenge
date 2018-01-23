import React, { Component } from 'react';
import CastMember from "./CastMember"
import * as apiConfigs from '../api-config.js';

class CastPicker extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      castLoaded: false
      castSelections: []
    }
  }

  // vs component did mount?
  componentWillMount() {
    this.loadMovieCast();
  }

  loadMovieCast(){
      const castUrl = `${apiConfigs.API_ROOT}/movie_data?movie_id=` + this.props.movieID;
      fetch(castUrl).then((response) => response.json())
        .then((responseJson) => {
          const cast = responseJson.cast;
          if (cast.length > 0) {
            this.setScrambledCast(cast.slice(0,5));
          } else {
            // TODO: ADD ERROR HANDLING
            console.log("Error getting cast");
          }
        })
  }

  setScrambledCast(castMembers){
    





  }



  render(){
    if (this.state.castLoaded) {
      return(<h1>Loading...</h1>  )
    } else {
      return(
        <div className="row castRow">
          {this.props.castData.map((castMember) => (
            <div>
              <CastMember castMember={castMember} scrambledSelections={this.props.scrambledCast} registerPick={this.props.registerPick} />
            </div>
          ))}
        </div>
      )




    }




  }
}


export default CastPicker
