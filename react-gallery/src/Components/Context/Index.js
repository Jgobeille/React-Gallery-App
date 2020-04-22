import React, { Component } from 'react';
import apiKey from '../../config.js';
import axios from 'axios';
const ReactGalleryContext = React.createContext();

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loading: true,
      searchText: '',
    };
  }

  componentDidMount() {
    this.searchQuery();
  }

  searchQuery = (input) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${input}&per_page=24&page=1&format=json&nojsoncallback=1`
      )
      .then((res) => {
        this.setState({
          images: res.data.photos.photo,
          loading: false,
        });
      });
  };
  onSearchChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      //The provider tag no longer exists because it was replaced with a class called provider
      //To remedy that, you need to reference the context created inside this index.js file
      <ReactGalleryContext.Provider
        //You can also pass functions to be consumed.
        //Just pass the values as an object and assign the values properties that can be called
        value={{
          images: this.state.images,
          loading: this.state.loading,
          searchText: this.state.searchText,
          actions: {
            searchQuery: this.searchQuery,
            onSearchChange: this.onSearchChange,
          },
        }}
      >
        {this.props.children}
      </ReactGalleryContext.Provider>
    );
  }
}

export const Consumer = ReactGalleryContext.Consumer;
