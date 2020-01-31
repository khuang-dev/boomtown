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
import { Avatar } from '@material-ui/core';
import moment from 'moment';
import Gravatar from "react-gravatar";

const useStyles = makeStyles({
    card: {
        minWidth: 400,
        height: 500,
        margin: "20px 10px 0 10px",
        backgroundColor: "#fff",
        borderRadius: "0",
    },
    cardcontent: {
        background: "#fff",
    },
    media: {
        height: 250,
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
    usermeta: {
        display: "flex"
    },
    avatar: {
        width: "50px",
        height: "50px",
        marginRight: "20px",
        borderRadius: "50px"
    },
    day: {
        color: "rgba(0, 0, 0, 0.5)",
        fontSize: "14px"
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
    let daysAgo = moment(item.created).fromNow()
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={item.imageurl || "https://image.shutterstock.com/z/stock-photo-natural-red-roses-background-614572562.jpg"}
                    title={item.title}
                />

                <CardContent className={classes.cardcontent}>
                    <div className={classes.usermeta}>
                        <Gravatar email={item.itemowner.email} size={100} rating="pg" default="monsterid" className={classes.avatar} />
                        <div>
                            <Typography className={classes.username}>
                                {item.itemowner.fullname}
                            </Typography>
                            <Typography className={classes.day}>
                                {daysAgo}
                            </Typography>
                        </div>
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
            </CardActionArea>
            <CardActions>
                <Button className={classes.button} size="small" color="primary">
                    Borrow
          </Button>
            </CardActions>
        </Card>
    )
};

export default withStyles(styles)(ItemCard);