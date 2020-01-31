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
        width: "95%",
        height: 500,
        margin: "10px 0",
        backgroundColor: "#fff",
        borderRadius: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    cardcontent: {
        background: "red",
    },
    media: {
        height: "50%",
        backgroundColor: "gray"
    },
    username: {
    },
    cardtitle: {
        color: "#212121"
    },
    carddescription: {
        color: "#212121"
    },
    itemmeta: {
        marginTop: "30px"
    },
    tags: {
        color: "rgba(0, 0, 0, 0.5)",
        fontSize: "14px"
    },
    button: {
        color: "#212121",
        border: "1px solid rgba(0, 0, 0, 0.23)",
        padding: "8px 24px",
        margin: "0 0 12px 8px"
    }
});

const ItemCard = ({ item }) => {
    const classes = useStyles();
    console.log({ item })
    return (
        <Card className={classes.card}>

            <CardMedia
                className={classes.media}
                image={item.imageurl}
                title={item.title}
            />

            <CardContent className={classes.cardcontent}>
                <div>
                    <Typography className={classes.username}>
                        {item.itemowner.fullname}
                    </Typography>
                </div>
                <div className={classes.itemmeta}>
                    <Typography className={classes.cardtitle}>
                        {item.title}
                    </Typography>
                    <Typography className={classes.tags}>
                        {item.tags.map((tags => tags.title))}
                    </Typography>
                    <Typography className={classes.cardtitle}>
                        {item.description}
                    </Typography>
                </div>
            </CardContent>

            <CardActions>
                <Button className={classes.button} size="small" color="primary">
                    Borrow
          </Button>
            </CardActions>
        </Card>
    )
};

export default withStyles(styles)(ItemCard);