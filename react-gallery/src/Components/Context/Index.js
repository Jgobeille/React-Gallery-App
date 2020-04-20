import React, { Component } from "react";

const ReactGalleryContext = React.createContext();

export class Provider extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      //The provider tag no longer exists because it was replaced with a class called provider
      //To remedy that, you need to reference the context created inside this index.js file
      <ReactGallery.Provider
        //You can also pass functions to be consumed.
        //Just pass the values as an object and assign the values properties that can be called
        value={{}}
      >
        {this.props.children}
      </ReactGallery.Provider>
    );
  }
}

export const Consumer = ReactGalleryContext.Consumer;
