import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Items from '../pages/Items'
import Home from '../pages/Home';
import Share from '../pages/Share';
import Profile from '../pages/Profile';
import NavBar from './NavBar';
import PrivateRoute from "../components/PrivateRoute"
import { ViewerContext } from "../context/ViewerProvider"
import FullScreenLoader from "../components/FullScreenLoader"

export default () => (
  <ViewerContext.Consumer>
    {({ viewer, loading }) => {
      if (loading) return <FullScreenLoader />;
      if (!viewer) {
        return (<Switch>
          <Route exact path="/welcome" name="home" component={Home} />
          <Redirect from="*" to="/welcome" />
        </Switch>)
      }
      return (
        <Fragment>
          <NavBar />
          <Switch>
            <PrivateRoute exact path="/items" component={Items} />
            <PrivateRoute exact path="/share" component={Share} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/profile/:id" component={Profile} />
            <Redirect from="*" to="/items" />
          </Switch>
        </Fragment>
      )
    }}
  </ViewerContext.Consumer>
);
