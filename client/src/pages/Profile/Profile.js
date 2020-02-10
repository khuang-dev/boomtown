import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ItemCard from "../../components/ItemCard"
import ItemGrid from "../../components/ItemGrid"

import ProfileCard from "../../components/ProfileCard"
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core/';



const Profile = ({ data, classes }) => {
  console.log(data.items)
  return (
    <div>
      <ProfileCard user={data} />
      <Typography>
        Shared Items
    </Typography>
      {data.items.map(item => {
        return (
          <Grid className={classes.cardcontainer} key={item.id} item xs={8}>
            <ItemCard
              item={item} />
          </Grid>
        )
      })}
    </div>
  );
};

export default withStyles(styles)(Profile);
