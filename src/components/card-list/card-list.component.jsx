import Card from '../card/Card.component';
import './CardList.styles.css';

const CardList = (props) =>  {
    console.log("rendering CardList...");
    const monsters = props.monsters;
    console.log('monsters in CardList comp: ', monsters);
    

    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <Card key={monster.id} monster={monster}></Card>
))}
      </div>
    );
  }

export default CardList;
