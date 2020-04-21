import React from 'react';

import '../index.css';
import SearchForm from './SearchForm';
import Nav from './Nav';
import Images from './ImagesContainer';

const App = () => {
  // console.log(this.state.gifs);
  return (
    <div class="container">
      <SearchForm />
      <Nav />
      <Images />
    </div>
  );
};

export default App;
