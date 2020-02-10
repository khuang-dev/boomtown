import React from 'react';
import styles from './styles';
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareItemPreview';
import {
  withStyles,
  Grid
} from '@material-ui/core/';
import PropTypes from 'prop-types';



const Share = ({ tags, classes }) => {
  return (
    <Grid className={classes.shareformcontainer}>
      <ShareItemPreview className={classes.preview} />
      <ShareItemForm className={classes.shareform} tags={tags} />
    </Grid>
  );
};
Share.propTypes = {
  // tags: PropTypes.object.isRequired, ??
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Share);
