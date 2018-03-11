import React, { Component } from 'react';
import CastThumbnail from './CastThumbnail'
import CastSelections from './CastSelections'
import * as apiConfigs from '../api-config.js';
import filmCountdown from '../../public/images/film_countdown.gif'
import '../styles/cast_picker.css';

class CastMember extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      imageSource: filmCountdown,
      imageLoaded: false,
    })
  }

  componentDidMount(){
    this.loadProfilePicture();
  }

  loadProfilePicture(){
    if (this.props.profileImageSource) {
      const profilePicture = new Image()
      profilePicture.src = `${apiConfigs.API_ROOT}/movie_thumbnail?poster_path=` + this.props.profileImageSource.substr(1).replace(/\.jpg/, "");
      profilePicture.onload = () => {
        this.setState({
          imageSource: profilePicture.src,
          imageLoaded: true
        })
      }
    } 
  }

  calculateImageClass( ){
    if (this.props.correct === true) {
        return "img-thumbnail correct";
    } else if (this.props.correct === false) {
        return "img-thumbnail incorrect";
    } else {
      return "img-thumbnail";
    }
  }
  registerPick(selectedID){
    if (this.props.id === selectedID) {
      this.props.updatePick(this.props.id, true)
    } else {
      this.props.updatePick(this.props.id, false)
    }
  }

  render() {
    return(
      <div className="cast-member">
        <CastThumbnail imageSource={this.state.imageSource} name={this.props.name} imageClass={this.calculateImageClass()}/>
        <CastSelections scrambledSelections={this.props.scrambledSelections} registerPick={this.registerPick.bind(this)}/>
      </div>
    )
  }
}

export default CastMember
