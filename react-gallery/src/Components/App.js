import React from 'react';
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';

import '../index.css';
import SearchForm from './SearchForm';
import Nav from './Nav';
import Images from './ImagesContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div class="container">
        <SearchForm />
        <Nav />
        <Images />
        <Switch></Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
