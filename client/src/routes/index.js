import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import Items from './src/pages/Items'
import Home from '../pages/Home';
// import Share from './src/pages/Share';
// import Profile from './src/pages/Profile';


export default () => (
  <Fragment>
    {/* @TODO: Add your menu component here */}
    <Switch>
      <Route exact path="/welcome" component={Home} />
      {/* <Route exact path="/items" component={Items} /> */}
      {/* <Route exact path="/share" component={Share} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/:id" component={Profile} /> */}
      {/* <Redirect from="*" to="/items" /> */}
    </Switch>
  </Fragment>
);
      /**
* Later, we'll add logic to send users to one set of routes if they're logged in,
* or only view the /welcome page if they are not.
*/