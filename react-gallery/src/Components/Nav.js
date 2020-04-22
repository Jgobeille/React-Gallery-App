import React from 'react';
import { NavLink } from 'react-router-dom';
import { Consumer } from './Context/index.js';

const nav = () => {
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
          </nav>
        );
      }}
    </Consumer>
  );
};

export default nav;
