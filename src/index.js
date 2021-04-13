import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }

  add = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <h1>testando o counter: {this.state.counter}</h1>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
