import React, { Component } from "react";
import "./loader.css";

export default class Loader extends Component {
  render() {
    let { errorMessage } = this.props;
    return (
      <div className="container d-flex justify-content-center">
        <div className="loader">Loading...</div>
        {errorMessage}
      </div>
    );
  }
}
