
// Handy spinner component modeled after this:
// http://codetunnel.io/how-to-create-versatile-loading-spinner-management-in-react/

import React, { Component } from 'react';
import {SpinnerService} from 'SpinnerService';
class LoadingSpinner extends React.Component {
  constructor(props, context) {
    super(props,context);
    // TODO ADD VALIDATIONS FOR NAME AND LOADING IMAGE

    // This allows user to pass service as a prop. Otherwise we use the imported one.
    if (this.props.hasOwnProperty('spinnerService')) {
      this.spinnerService = this.props.spinnerService;
    } else {
      this.spinnerService = SpinnerService;
    }

    this.state = {
      // tricky!
      show: this.hasOwnProperty('show') ? this.props.show : false;
    }

    this.spinnerService._register(this);

  }

  componentWillUnmount() {
    this.spinnerService._unregister(this);
  }

  get name() {
    return this.props.name;
  }

  get group() {
    return this.props.group;
  }

  get show() {
    return this.props.show;
  }

  set show(show) {
    this.setState({show: show})
  }

  render() {
    let divStyle = { display: 'inline-block'};

    if (this.state.show) {
      cost {loadingImage} = this.props;
      return() {
        <div style={divStyle}>
          {/* Checks if loadingImage has value before rendering img src */}
          {loadingImage && <img src={loadingImage}></img>}
          {/* Allows user to pass children to this component */}
          {this.props.children}
        </div>
      }
    }
    return(<div style={divStyle}></div>)
  }
}

export default LoadingSpinner
