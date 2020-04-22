import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
        <Switch>
          <Route path="/" />
          <Route path="/search/:topic" />
          <Route path="/NotFound" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
