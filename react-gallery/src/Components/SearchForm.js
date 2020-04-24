import React, { Component } from 'react';
import { Consumer } from './Context/index.js';

/**
 * Search Form allow user to search for images
 * @component searchForm
 *
 */
export default class SearchForm extends Component {
  state = {
    searchText: '',
  };

  render() {
    //creates reference to input
    let input = React.createRef();

    /*
      gets the pathname of the search url or topic selected
      then remoces /search/ or / from path name and saves 
      into localStorage
    */
    let pathName = this.props.history.history.location.pathname;
    if (pathName.includes('/search')) {
      pathName = pathName.substring(8);
    } else {
      pathName = pathName.substring(1);
    }
    //set pathName into localstorage
    localStorage.setItem('items', pathName);

    return (
      <Consumer>
        {(context) => {
          const handleSubmit = (e) => {
            //value of the search input ref
            const value = input.current.value;
            e.preventDefault();
            //changes url to blank
            this.props.history.history.replace('');
            let path = `search/${value}`;
            console.log(path);
            //appends the path to the history
            this.props.history.history.push(path);
            context.actions.searchQuery(value);
            e.currentTarget.reset();
          };

          const onSearchChange = (e) => {
            const value = e.target.value;
            this.setState({
              searchText: value,
            });
          };
          return (
            <form className="search-form" onSubmit={handleSubmit}>
              <input
                type="search"
                name="search"
                placeholder="Search for your A E S T H E T I C..."
                onChange={onSearchChange}
                ref={input}
                required
              />
              <button type="submit" className="search-button">
                <svg
                  fill="#fff"
                  height="24"
                  viewBox="0 0 23 23"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </button>
            </form>
          );
        }}
      </Consumer>
    );
  }
}
