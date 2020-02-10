import React from 'react';
import styles from './styles';
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareItemPreview';
import {
  withStyles,
  Grid
} from '@material-ui/core/';



const Share = ({ tags, classes }) => {
  console.log(tags)
  return (
    <Grid className={classes.shareformcontainer}>
      <ShareItemPreview className={classes.preview} />
      <ShareItemForm className={classes.shareform} tags={tags} />
    </Grid>
  );
};

export default withStyles(styles)(Share);
