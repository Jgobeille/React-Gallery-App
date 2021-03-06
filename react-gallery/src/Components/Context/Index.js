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
      input: localStorage.getItem('items') || 'cats',
    };
  }

  componentDidMount() {
    this.searchQuery(this.state.input);
  }

  searchQuery = (input) => {
    //sets current item to local Storage
    localStorage.setItem('items', input);
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${input}&per_page=24&page=1&format=json&nojsoncallback=1`
      )
      .then((res) => {
        this.setState({
          images: res.data.photos.photo,
          loading: false,
          input: input,
        });
      });
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
          input: this.state.input,
          actions: {
            searchQuery: this.searchQuery,
          },
        }}
      >
        {this.props.children}
      </ReactGalleryContext.Provider>
    );
  }
}

export const Consumer = ReactGalleryContext.Consumer;
