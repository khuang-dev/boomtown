import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Items from '../pages/Items'
import Home from '../pages/Home';
import Share from '../pages/Share';
import Profile from '../pages/Profile';
import NavBar from './NavBar';


export default () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/welcome" component={Home} />
      <Route exact path="/items" component={Items} />
      <Route exact path="/share" component={Share} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/:id" component={Profile} />
      <Redirect from="*" to="/items" />
    </Switch>
  </Fragment>
);
      /**
* Later, we'll add logic to send users to one set of routes if they're logged in,
* or only view the /welcome page if they are not.
*/