import { Component } from "react";
import "./search-box.styles.css";


class SearchBox extends Component {
    
/* onSearchChange = (event) => {
    this.setState( () => {
        return {
            searchText: event.target.value
        }
    }, () => console.log('this.state.searchText: ', this.state.searchText) )
} */

  render() {

    return (
      <div>
        <input
          className={this.props.className}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        ></input>
      </div>
    );
  }
}

export default SearchBox;