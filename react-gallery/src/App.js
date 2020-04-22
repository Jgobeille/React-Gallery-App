import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import Images from './Components/ImagesContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <SearchForm />
        <Nav />
        <Switch>
          <Route exact path="/" component={Images} />
          <Route exact path="/:id" component={Images} />
          <Route path="/search/:topic" component={Images} />
          <Route path="/NotFound" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
