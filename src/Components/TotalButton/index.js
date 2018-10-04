import React, { Component } from "react";
import classNames from "classnames";

export default class TotalButton extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <button
          name="clickStateForTotal"
          className={classNames({ total_button: true })}>
          Total
        </button>
      </div>
    );
  }
}
