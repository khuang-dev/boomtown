import React, { Component } from 'react';
import Profile from './Profile';
import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from 'react-apollo';
import { ALL_USER_ITEMS_QUERY } from '../../apollo/queries';
import { ViewerContext } from '../../context/ViewerProvider'

class ProfileContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer, data }) => (
          <Query query={ALL_USER_ITEMS_QUERY} variables={{ id: this.props.match.params.id || viewer.id }}>
            {({ loading, error, data }) => {
              if (loading) return <FullScreenLoader />;
              if (error) return `Error! ${error.message}`;
              return <Profile data={data.user} />
            }}
          </Query>
        )}
      </ViewerContext.Consumer>
    )
  }
}

export default ProfileContainer;
