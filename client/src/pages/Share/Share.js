import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareItemPreview';
import { Grid } from '@material-ui/core'

/* 


  ShareItemForm is the form that our User will use to add a new item 
from share js make grid call share item preview and then share item card
share item preview calls share item card
from share js make grid->first item call share item preview share item form
  When the user is filling ShareItemForm, we will show a preview of 
  this item using the ShareItemPreview. 
  Hint: It should look like any other Item card.

*/

const Share = ({ tags, classes }) => {
  console.log(tags)
  return (
    <Grid className={classes.shareformcontainer}>
      <ShareItemPreview className={classes.preview}/>

      <ShareItemForm tags={tags} />
    </Grid>
  );
};

export default withStyles(styles)(Share);
