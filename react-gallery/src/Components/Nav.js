import React from 'react';
import { NavLink, Route, Redirect, Switch } from 'react-router-dom';
import { Consumer } from './Context/index.js';
import Images from './ImagesContainer';
import PageNotFound from './PageNotFound';

const nav = (props) => {
  console.log(props);
  //creat array of options
  //loop over the options
  //pass th results
  return (
    <Consumer>
      {({ actions, images }) => {
        return (
          <nav className="main-nav">
            <ul>
              <li>
                <NavLink to="/cats" onClick={() => actions.searchQuery('cats')}>
                  Cats
                </NavLink>
              </li>
              <li>
                <NavLink to="/dogs" onClick={() => actions.searchQuery('dogs')}>
                  Dogs
                </NavLink>
              </li>
              <li>
                <NavLink to="/computers" onClick={() => actions.searchQuery('computers')}>
                  Computers
                </NavLink>
              </li>
            </ul>
            <Switch>
              <Route exact path="/search/:id" render={() => <Images pics={images} />} />
              <Route exact path="/cats" render={() => <Images pics={images} />} />
              <Route exact path="/dogs" render={() => <Images pics={images} />} />
              <Route exact path="/computers" render={() => <Images pics={images} />} />
              <Route exact path="/" render={() => <Redirect to={'/cats'} />} />
              <Route component={PageNotFound} />
            </Switch>
          </nav>
        );
      }}
    </Consumer>
  );
};

export default nav;
