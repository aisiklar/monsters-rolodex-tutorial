import "./search-box.styles.css";


const SearchBox = (placeholder, onChangeHandler, className) => {
    
/* onSearchChange = (event) => {
    this.setState( () => {
        return {
            searchText: event.target.value
        }
    }, () => console.log('this.state.searchText: ', this.state.searchText) )
} */


    return (
      <div>
        <input
          className={className}
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
        ></input>
      </div>
    );
  }

export default SearchBox;