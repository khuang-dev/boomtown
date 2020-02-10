import React from 'react';
import styles from './styles';
import ItemCard from "../../components/ItemCard"
import ProfileCard from "../../components/ProfileCard"
import {
  withStyles,
  Grid,
  Typography
} from '@material-ui/core/';




const Profile = ({ data, classes }) => {
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
