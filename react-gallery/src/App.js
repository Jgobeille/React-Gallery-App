import React from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';

import './index.css';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import Images from './Components/ImagesContainer';
import NotFound from './Components/NoResults';

const App = (props) => {
  return (
    <Router>
      <div className="container">
        <SearchForm history={props} />
        <Nav />
        <Switch>
          <Route exact path="/" component={Images} />
          <Route exact path="/:id" component={Images} />
          <Route path="/search/:id" component={Images} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default withRouter(App);
