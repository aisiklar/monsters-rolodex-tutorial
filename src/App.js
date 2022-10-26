import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    console.log('app started - constructor()- 1st item that is executed');
    this.state = {
      monsters: [],
      filteredMonsters: []
    }
  }

  componentDidMount() {
    console.log('componendDidMount() - 3rd item that is executed')
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((users) => {
      console.log('users', users);
      this.setState(() => { return { monsters: users } });
      return this.setState(() => { return { filteredMonsters: users } }, () => { console.log(`this.state:`, this.state) })
    })
  }

  onSearchChange = (event) => {
    let monsters = this.state.monsters;
    let filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(event.target.value.toLowerCase()));
    console.log(`filteredMonsters:`, filteredMonsters);
    this.setState(() => {
      return {
        filteredMonsters: filteredMonsters
      }


      render() {
        console.log('render() - 2nd item that is executed')



        return (
          <div className='App'>
            <input className="#" type="search" placeholder="search monster" onChange={this.onSearchChange}, () => {console.log('filteredMonsters: ', this.state.filteredMonsters)})
          }
        } ></input>

        {
          this.state.filteredMonsters.map(
            (monster) => {
              return (
                <div key={monster.id}>
                  <h1>{monster.name}</h1>
                </div>)
            }
          )
        }
      </div >)

  }

}


export default App;