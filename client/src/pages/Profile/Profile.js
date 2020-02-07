import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ItemCard from "../../components/ItemCard"
import ProfileCard from "../../components/ProfileCard"
import Grid from '@material-ui/core/Grid';




const Profile = ({ data, classes }) => {
  console.log(data.items)
  return (
    <div>
      <ProfileCard user={data} />
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
