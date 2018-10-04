import React, { Component } from "react";
import "./Row.css";

export default class Row extends Component {
  constructor(props) {
    super(props);

    this.countryflagsMap = {
      USA: "US",
      NOR: "NO",
      RUS: "RU",
      NED: "AN",
      FRA: "FR",
      SWE: "SE",
      ITA: "IT",
      CAN: "CA",
      SUI: "CH",
      BLR: "BY",
      GER: "DE",
      AUT: "AT",
      CHN: "CN"
    };
  }

  render() {
    let { bronze, silver, gold, total, code, number } = this.props;
    let url = `https://www.countryflags.io/${
      this.countryflagsMap[code]
    }/flat/64.png`;
    return (
      <tr>
        <th scope="row">
          {`${number + 1}.`} <img alt="" src={url} />
          {code}
        </th>
        <td className="gold_name">{gold}</td>
        <td className="silver_name">{silver}</td>
        <td className="bronze_name">{bronze}</td>
        <td className="total_name">{total}</td>
      </tr>
    );
  }
}
