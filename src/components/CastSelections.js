import React, { Component } from 'react';

class CastSelections extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      selectedID: null,
    })
  }

  buttonClass(castMemberID){
    if (this.state.selectedID === castMemberID) {
      return "btn btn-default selected";
    } else {
      return "btn btn-default";
    }
  }

  registerPick(castMemberID) {
    this.props.registerPick(castMemberID);
    this.setState({selectedID: castMemberID});
  }

  render() {
    return (
      <div className="btn-group-vertical cast-buttons" role="group">
        {this.props.scrambledSelections.map((castMember) => (
          <button key={castMember.id} type="button" className={this.buttonClass(castMember.id)} onClick={this.registerPick.bind(this, castMember.id)}>{castMember.name}</button>
           // <button key={castMember.id} type="button" className="btn btn-default active" onClick={this.props.registerPick.bind(this, castMember.id)}>{castMember.name}</button>
        ))}
      </div>
    )
  }
}


export default CastSelections
