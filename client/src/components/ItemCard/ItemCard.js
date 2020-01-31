import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        backgroundColor: "black",
    },
    media: {
        height: 140,
    },
    cardtitle: {
        textTransform: "uppercase",
        color: "white"
    },
    carddescription: {
        textTransform: "uppercase",
    }
});

const ItemCard = ({ item }) => {
    const classes = useStyles();
    console.log({ item })
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="./"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography className={classes.cardtitle} gutterBottom variant="h5" component="h2">
                        {item.title}
                    </Typography>
                    <Typography className={classes.cardtitle} variant="body2" color="textSecondary" component="p">
                        {item.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Borrow
          </Button>
                <Button size="small" color="primary">
                    Learn More
          </Button>
            </CardActions>
        </Card>
    )
};

export default withStyles(styles)(ItemCard);