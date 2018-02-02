import React, {Component} from 'react';

class SearchModal extends Component {
  render() {
    // Move to props interaction
    let closeModal = () => this.setState({showSearchModal: false});

    return(
      <div>
        <Modal className="testModal" show={this.props.showSearchModal} onHide={closeModal} aria-labelledby="ModalHeader">
          <Modal.Header closeButton>
            <Modal.Title id="ModalHeader">Welcome to Who's In It? The movie cast matching game.</Modal.Title>
            <Modal.Body>
              <p>To get started, enter your favorite movie title below:</p>

              <form onSubmit={this.submitSearch.bind(this)}>
                <input type="text" className="searchBar" onChange={this.props.updateSearch}name="search"/>
                <input type="submit" value="Submit" />
              </form>

            </Modal.Body>
            {/* <Modal.Footer>
              <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
            </Modal.Footer> */}
          </Modal.Header>
        </Modal>
      </div>

    )

    // return this.props.open ? (
    //   <div>
    //     <div role="dialog" className="searchModal">
    //       <div className="modalMessage">
    //         <h2>Welcome to</h2>
    //         <h1>Who's In It?</h1>
    //         <h3>The movie cast matching game</h3>
    //
    //         <form onSubmit={this.props.submitSearch}>
    //           <input type="text" className="searchBar" onChange={this.props.updateSearch}name="search"/>
    //           <input type="submit" value="Submit" />
    //         </form>
    //
    //         <button className="closeButton" onClick={()=> this.props.onClose()} type="button" aria-label="close">X</button>
    //       </div>
    //     </div>
    //   </div>
    //
    // ) : null;
  }
}

export default SearchModal;
