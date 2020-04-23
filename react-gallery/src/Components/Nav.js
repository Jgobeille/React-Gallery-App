import React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import { Consumer } from './Context/index.js';

const nav = () => {
  //creat array of options
  //loop over the options
  //pass th results
  return (
    <Consumer>
      {({ actions, input }) => {
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
            <Route exact path="/" render={() => <Redirect to={`/${input}`} />} />
          </nav>
        );
      }}
    </Consumer>
  );
};

export default nav;
