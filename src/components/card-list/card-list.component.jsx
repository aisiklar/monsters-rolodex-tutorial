import { render } from "@testing-library/react";
import { Component } from "react";

class CardList extends Component {
  render() {
    console.log("rendering CardList...");
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <div className="card-container" key={monster.id}>
            <img 
            alt={`monster ${monster.name}`}
            src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
            ></img>
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
          </div>
))}
      </div>
    );
  }
}

export default CardList;
