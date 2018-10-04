import React, { Component } from "react";
import "./Application.css";
import axios from "axios";

import {
  Row,
  Loader,
  Title,
  SilverButton,
  GoldButton,
  BronzeButton,
  TotalButton
} from "../../Components/";

export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreArray: [],
      fetching: true,
      errorMessage: ""
    };
  }

  componentDidMount() {
    const url =
      "https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json";
    axios
      .get(url)
      .then(response => {
        let { data } = response;
        var objectMapWithTotal = data.map((el, i) => {
          el["total"] = el["gold"] + el["silver"] + el["bronze"];
          return el;
        });

        let defaultSort = objectMapWithTotal.sort((a, b) => b.gold - a.gold);

        this.setState({
          scoreArray: defaultSort,
          fetching: false
        });
      })
      .catch(error => {
        if (!navigator.onLine) {
          this.setState({
            errorMessage: "It appears you are offline"
          });
        } else {
          this.setState({
            errorMessage: "There was an error fetching.. Did you enable CORS?"
          });
        }
      });
  }

  tieBreakerSort(primaryKey, secondaryKey) {
    console.log("asdf")
    let { scoreArray } = this.state;

    const getCompareFunction = (primaryKey, secondaryKey) => (x, y) =>
      y[primaryKey] - x[primaryKey] || y[secondaryKey] - x[secondaryKey];

    const compareFuncHolder = getCompareFunction(primaryKey, secondaryKey);

    var result = scoreArray.sort(compareFuncHolder);

    this.setState({
      scoreArray: result
    });
  }

  render() {
    let { scoreArray, fetching } = this.state;
    if (fetching) {
      return <Loader errorMessage={this.state.errorMessage} />;
    }

    return (
      <div className="container">
        <div className="row card mt-5">
          <div className="container-fluid">
            <Title />
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"/>
                  <th scope="col">
                    <GoldButton unqiueSort={e => this.tieBreakerSort("bronze", "gold")}
                    />
                  </th>
                  <th scope="col">
                    <SilverButton  unqiueSort={e => this.tieBreakerSort("silver", "gold")} />
                  </th>
                  <th scope="col">
                    <BronzeButton  unqiueSort={e => this.tieBreakerSort("bronze", "gold")} />
                  </th>
                  <th scope="col">
                    <TotalButton  unqiueSort={e => this.tieBreakerSort("total", "gold")}/>
                  </th>
                </tr>
              </thead>
              <tbody>
                {scoreArray.map((el, i) => {
                  return <Row number={i} key={i} {...el} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
