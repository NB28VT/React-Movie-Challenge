import React, {Component} from 'react';

class SearchMessage extends Component {
  render() {
    if (this.props.noResults) {
      return (
        <div>
          <h1>No Movies Found</h1>
          {/* <h2>Search Again</h2> */}
        </div>
      )
    } else {
      return (
        <div>
          <h1>Who's In It?</h1>
          <h2>The Movie Cast Matching Game</h2>
        </div>
      )
    }
  }
}

export default SearchMessage;
