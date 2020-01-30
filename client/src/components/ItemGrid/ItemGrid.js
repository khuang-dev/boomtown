import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ItemCard from '../../components/ItemCard'

const ItemGrid = ({ items }) => {
    console.log(items)

    return (
        <div>
            <ItemCard items={items} />
            <p>itemsgrid</p>
        </div>
    )
};
export default withStyles(styles)(ItemGrid);