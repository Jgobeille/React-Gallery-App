import React from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter, Redirect } from 'react-router-dom';

import './index.css';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import Images from './Components/ImagesContainer';
import PageNotFound from './Components/PageNotFound';

const App = (props) => {
  return (
    <Router>
      <div className="container">
        <SearchForm history={props} />
        <Nav />
        <Switch>
          <Route exact path="/cats" component={Images} />
          <Route exact path="/dogs" component={Images} />
          <Route exact path="/computers" component={Images} />
          <Route exact path="/search/:id" component={Images} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default withRouter(App);
