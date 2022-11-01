import { Component } from "react";
import Card from '../card/Card.component';
import './CardList.styles.css';

class CardList extends Component {
  render() {
    console.log("rendering CardList...");
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <Card monster={monster}></Card>
))}
      </div>
    );
  }
}

export default CardList;
