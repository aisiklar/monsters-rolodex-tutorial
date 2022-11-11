import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
//import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// functional component

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  console.log("App started, monsters: ", monsters);

  useEffect(() => {
    setFilteredMonsters(monsters);
  }, [monsters]);
  //console.log("filteredMonsters: ", filteredMonsters);

  // fetch users from the api
  const fetchUser = async () => {
    console.log("in the fetchUser() function");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    //console.log("users: ", users);
    await setMonsters(users);
    //console.log("monsters: ", monsters);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // call the fetch function if monsters is empty
  // since useEffect() is used, commenting the following script
  /*    if (monsters.length === 0){
    console.log('in the if condition to call fetchUser()');
    fetchUser();  
  } */

  const onSearchChange = (event) => {
    console.log('in the onSearchChange func. filteredMonsters filtered from monsters upon input from user');
    
    let filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    //console.log(`filteredMonsters:`, filteredMonsters);
    setFilteredMonsters(filteredMonsters);
    //console.log("changing the state filteredMonsters: ", filteredMonsters);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monster"
        className="search-box"
      ></SearchBox>
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
};

// class component:

/* class App extends Component {
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
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Monster"
          className = "search-box"
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
 */
export default App;
