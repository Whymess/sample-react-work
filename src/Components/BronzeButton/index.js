import React, { Component } from "react";
import classNames from "classnames";

export default class BronzeButton extends Component {
  render() {
    let {unqiueSort} = this.props
    return (
      <div className={classNames({ "d-flex justify-content-center": true })}>
        <button
          name="clickStateForBronze"
          onClick={() => unqiueSort()}
          className="dot bronze"
        />
      </div>
    );
  }
}
