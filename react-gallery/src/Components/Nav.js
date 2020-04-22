import React from 'react';
import { NavLink, useParams, Switch, Route } from 'react-router-dom';

const nav = () => {
  return (
    <nav class="main-nav">
      <ul>
        <li>
          <NavLink to="/cats">Cats</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/computers">Computers</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/:id" />
      </Switch>
    </nav>
  );
};

export default nav;
