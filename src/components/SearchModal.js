import React, {Component} from 'react';
import {Modal} from "react-bootstrap";
import filmReel from "../../public/images/placeholderFilmReel.png";
import SearchMessage from './SearchMessage';
import '../styles/search_modal.css';

class SearchModal extends Component {
  render() {
    return(
      <Modal bsSize="large" show={this.props.show} dialogClassName="search-modal">
        <Modal.Body>
          <div className="container-fluid search-form-body">
            <div className="row">
              <div className="col-md-4 logo">
                <img src={filmReel} alt="film reel"></img>
              </div>
              <div className="col-md-8 logo-title">
                <SearchMessage noResults={this.props.noResults}/>
                <div id="search-form">
                  <p>Search for your favorite movie title or series below:</p>
                  <form onSubmit={this.props.submitSearch}>
                    <input type="text" className="search-bar" onChange={this.props.updateSearch}name="search"/>
                    <input className="search-button" type="submit" value="Search" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    )
  }
}

export default SearchModal;
