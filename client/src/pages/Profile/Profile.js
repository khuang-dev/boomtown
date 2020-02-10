import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ItemCard from "../../components/ItemCard"
import ProfileCard from "../../components/ProfileCard"
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core/';



const Profile = ({ data, classes }) => {
  console.log(data.items)
  return (
    <div>
      <ProfileCard user={data} />
      <Typography className={classes.shareditemtitle}>
        Shared Items
    </Typography>
      <Grid className={classes.cardcontainer} item xs={12}>
        {data.items.map(item => {
          return (
            <div className={classes.card}>
              <ItemCard
                key={item.id}
                item={item} />
            </div>
          )
        })}
      </Grid>

    </div>
  );
};

export default withStyles(styles)(Profile);
