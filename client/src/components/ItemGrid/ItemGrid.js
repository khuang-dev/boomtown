import React from 'react';
import styles from './styles';
import ItemCard from '../../components/ItemCard'
import {
    withStyles,
    Grid
} from '@material-ui/core/';


const ItemGrid = ({ items, classes }) => {
    return (
        <Grid container className={classes.gridcontainer} spacing={2}>
            <Grid item className={classes.gridcontainer} xs={12}>
                {items.map(item => {
                    return (
                        <Grid className={classes.cardcontainer} key={item.id} item xs={8}>
                            <ItemCard
                                item={item} />
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
};
export default withStyles(styles)(ItemGrid);