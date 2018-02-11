import React, { Component } from 'react';
class PosterPlaceholder extends Component {

  parseReleaseDate() {
    const d = new Date(this.props.release_date);
    return d.getFullYear();
  }

  render() {
    return (
      <div className="img-thumbnail movie-poster poster-placeholder" onClick={this.props.selectMovie}>
        <h1>{this.props.name} ({this.parseReleaseDate()})</h1>
      </div>
    )
  }
}

export default PosterPlaceholder
