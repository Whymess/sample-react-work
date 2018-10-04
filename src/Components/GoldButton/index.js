import React, { Component } from "react";
import classNames from "classnames";

export default class GoldButton extends Component {
  render() {
     let {unqiueSort} = this.props
    return (
      <div className={classNames({ "d-flex justify-content-center": true })}>
        <button
          name="clickStateForGold"
            onClick={() => unqiueSort()}
          className="dot gold"
        />
      </div>
    );
  }
}
