import React from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

import './index.css';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import Images from './Components/ImagesContainer';

const App = () => {
  let history = useHistory();
  console.log(history);
  return (
    <Router>
      <div className="container">
        <SearchForm history={history} />
        <Nav />
        <Switch>
          <Route exact path="/" component={Images} />
          <Route path="/search/:id" component={Images} />
          <Route path="/NotFound" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
