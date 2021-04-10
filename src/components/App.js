import React, { Component } from "react";
import CreateProblem from "./createProblem";
import ProblemList from "./problemList";

class App extends Component {
  render() {
    return (
      <>
        <ProblemList />
        <CreateProblem />
      </>
    );
  }
}

export default App;
