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
import moment from 'moment';
import Gravatar from "react-gravatar";
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
    card: {
        minWidth: 400,
        height: 500,
        margin: "10px 10px 10px 10px",
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
    console.log(item)
    let daysAgo = moment(item && item.created).fromNow()
    return (
        <Card className={classes.card}>
            <CardActionArea>

                <NavLink to={item.itemowner.id && `/profile/${item.itemowner.id}`}>
                    <CardMedia
                        className={classes.media}
                        image={item.imageurl ? item.imageurl : "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10:750/jb7production-uploads/2017/07/dreamstatefestivallogo-2017.jpg"}
                        title={item && item.title}
                    />

                    <CardContent className={classes.cardcontent}>
                        <div className={classes.usermeta}>
                            <Gravatar email={item.itemowner && item.itemowner.email} size={100} rating="pg" default="monsterid" className={classes.avatar} />
                            <div>
                                <Typography className={classes.username}>
                                    {item.itemowner && item.itemowner.fullname}
                                </Typography>
                                <Typography className={classes.day}>
                                    {daysAgo}
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.itemmeta}>
                            <Typography className={classes.cardtitle}>
                                {item && item.title}
                            </Typography>
                            {item && item.tags.map((tag) =>

                                <Typography className={classes.tags}>
                                    {tag.title}

                                </Typography>
                            )}
                            <Typography className={classes.cardtitle}>
                                {item && item.description}
                            </Typography>
                        </div>
                    </CardContent>
                </NavLink>
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