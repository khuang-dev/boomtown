import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ItemGrid from '../../components/ItemGrid';
import PropTypes from 'prop-types';


const Items = ({ classes, items }) => {
  return (
    <div>
      <ItemGrid items={items} />
    </div>
  );
};
Items.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};
export default withStyles(styles)(Items);
