import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ItemCard from '../../components/ItemCard'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    gridcontainer: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-around",
    },
    cardcontainer: {
        height: 140,
        width: 100,
        margin: "0 25px"
    },
}));
const ItemGrid = ({ items }) => {
    console.log(items)
    const classes = useStyles();
    return (
        <Grid className={classes.gridcontainer} spacing={2}>
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