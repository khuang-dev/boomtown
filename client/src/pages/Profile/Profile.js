import React from 'react';
import styles from './styles';
import ItemCard from "../../components/ItemCard"
import ProfileCard from "../../components/ProfileCard"
import {
  withStyles,
  Grid,
  Typography
} from '@material-ui/core/';
import PropTypes from 'prop-types';


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
            <div key={item.id} className={classes.card}>
              <ItemCard
                item={item} />
            </div>
          )
        })}
      </Grid>

    </div>
  );
};
Profile.propTypes = {
  data: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
