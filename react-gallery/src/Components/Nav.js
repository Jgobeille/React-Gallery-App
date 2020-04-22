import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Consumer } from './Context/index.js';
import Images from './ImagesContainer';

const nav = () => {
  //creat array of options
  //loop over the options
  //pass th results
  return (
    <Consumer>
      {({ actions }) => {
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

            <Route path="/cats" component={Images}></Route>
            <Route path="/dogs" component={Images}></Route>
            <Route path="/computers" component={Images}></Route>
          </nav>
        );
      }}
    </Consumer>
  );
};

export default nav;
