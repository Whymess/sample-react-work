import React, { Component } from "react";
import classNames from "classnames";

export default class SilverButton extends Component {

  render() {
    let {unqiueSort} = this.props
    return (
      <div className={classNames({ "d-flex justify-content-center": true })}>
        <button
          name="clickStateForSilver"
            onClick={() => unqiueSort()}
          className="dot silver"> </button>
        
      </div>
    );
  }
}
