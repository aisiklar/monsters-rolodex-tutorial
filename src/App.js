import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    console.log("app started - constructor()- 1st item that is executed");
    this.state = {
      monsters: [],
      filteredMonsters: [],
    };
  }

  componentDidMount() {
    console.log("componendDidMount() - 3rd item that is executed");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        console.log("users", users);
        this.setState(() => {
          return { monsters: users };
        });
        return this.setState(
          () => {
            return { filteredMonsters: users };
          },
          () => {
            console.log(`this.state:`, this.state);
          }
        );
      });
  }

  onSearchChange = (event) => {
    let monsters = this.state.monsters;
    let filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    console.log(`filteredMonsters:`, filteredMonsters);
    this.setState(() => {
      return {
        filteredMonsters: filteredMonsters,
      };
    });
  };

  render() {     
    let filteredMonsters = this.state.filteredMonsters;
    
    console.log("render() - 2nd item that is executed");

    // destructuring for optimization

    const { onSearchChange } = this;

    return (
      <div className="App">
        <input
          className="#"
          type="search"
          placeholder="search monster"
          onChange={onSearchChange}
        ></input>
        <CardList monsters = {filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
