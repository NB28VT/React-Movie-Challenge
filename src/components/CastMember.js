import React, { Component } from 'react';
import CastThumbnail from './CastThumbnail'
import CastSelections from './CastSelections'
import * as apiConfigs from '../api-config.js';
// TODO: maybe a placeholder for a profile pic?
// TODO: if no image is available, don't display
import filmCountdown from '../../public/images/film_countdown.gif'

class CastMember extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      imageSource: filmCountdown,
      imageLoaded: false,
      correct: null
    })
  }

  componentWillMount(){
    this.loadProfilePicture();
  }

  loadProfilePicture(){
    const profilePicture = new Image()
    profilePicture.src = `${apiConfigs.API_ROOT}/movie_thumbnail?poster_path=` + this.props.castMember.profile_path.substr(1).replace(/\.jpg/, "");
    profilePicture.onload = () => {
      this.setState({
        imageSource: profilePicture.src,
        imageLoaded: true
      })
    }
  }

  calculateImageClass( ){
    if (this.state.correct === true) {
        return "correctAnswer";
    } else if (this.state.correct === false) {
        return "wrongAnswer";
    }
  }
  registerPick(selectedID){
    if (this.props.castMember.id === selectedID) {
      this.setState({correct: true});
    } else {
      this.setState({correct: false});
    }
  }

  render() {
    return(
      <div className="castMember">
        <CastThumbnail imageSource={this.state.imageSource} name={this.props.castMember.name} imageClass={this.calculateImageClass()}/>
        <CastSelections selections={this.props.scrambledSelections} registerPick={this.registerPick.bind(this)}/>
      </div>
    )
  }

  // render() {
  //   const thumbnailUrl = "Beh";
  //   // const thumbnailUrl = `${API_ROOT}/cast_thumbnail?profile_picture_path=` +  this.props.castMember.profile_path.substr(1).replace(/\.jpg/, "");
  //   return(
  //     <div className={this.calculateDivClass()}>
  //       <img src={thumbnailUrl} alt={this.props.castMember.name} className="img-thumbnail castMemberThumbnail"/>
  //       <div className= "btn-group-vertical castButtons" role="group">
  //         {this.props.scrambledSelections.map((scrambledCastMember) => (
  //            <button type="button" className="btn btn-default" onClick={this.handleCastSelection.bind(this, scrambledCastMember)}>{scrambledCastMember.name}</button>
  //         ))}
  //       </div>
  //     </div>
  //   )
  // }

  // handleCastSelection(castMember) {
  //   if (castMember.id === this.props.castMember.id) {
  //     this.props.registerPick(this.props.castMember.id, true);
  //   } else {
  //     this.props.registerPick(this.props.castMember.id, false);
  //   }
  // }
  //
}

export default CastMember
