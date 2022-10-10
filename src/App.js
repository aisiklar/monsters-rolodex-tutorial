import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: {
        "main-name": "world",
        says: "rules",
      },
      when: "always",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            hello {this.state.name["main-name"]} {this.state.name.says}{" "}
            {this.state.when}
          </p>
          <button
            onClick={() => {
              console.log("button clicked");
              this.setState({
                name: { "main-name": "alptekin", says: "rules" },
              });
            }}
          >
            Change name{" "}
          </button>
        </header>
      </div>
    );
  }
}

export default App;
