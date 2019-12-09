import React, { Component } from "react";
import map from "lodash/map";
import UseHoverComp from "./UseHoverComp";
import UseDataApiComp from "./UseDataApiComp";
import UseMemoComp from "./UseMemoComp";

class ReactBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    return (
      <div>
        <h1>react state</h1>

        <p>{this.state.name}</p>
        <span>Say Hello to World : </span>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />

        <h1>react hooks</h1>

        <h2>useHover</h2>
        <UseHoverComp />
        <h2>useDataApi</h2>
        <UseDataApiComp />
        <h2>useMemo</h2>
        <UseMemoComp />
      </div>
    );
  }
}

export default ReactBasics;
