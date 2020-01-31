import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ItemGrid from '../../components/ItemGrid';


const Items = ({ classes, items }) => {
  // console.log(items)
  return (
    <div>
      <ItemGrid items={items} />
    </div>
  );
};

export default withStyles(styles)(Items);
