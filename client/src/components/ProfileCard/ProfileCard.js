import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Gravatar from "react-gravatar";

const useStyles = makeStyles({
    profilecontainer: {
        padding: "0 85px",
        height: "100%",
        width: "100%",
        backgroundColor: "#212121",
        paddingTop: "150px",
    },
    profilecard: {
        minWidth: 400,
        height: 250,
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
        color: "rgba(0, 0, 0, 0.54)",
        fontSize: "45px",
        transform: "translateY(-7px)"
    },
    cardtitle: {
        color: "#212121"
    },
    carddescription: {
        color: "#212121"
    },
    itemcount: {
        display: "flex",
        marginLeft: "30px"
    },
    count: {
        marginRight: "10px",
        fontSize: "20px"
    },
    usermeta: {
        display: "flex",
        marginTop: "30px",
        marginLeft: "30px"
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
    },
    bio: {
        marginLeft: "30px"
    },
    bold: {
        fontWeight: "bold"
    }
});

const ProfileCard = ({ user }) => {
    const classes = useStyles();
    console.log(user)
    return (
        <div className={classes.profilecontainer}>
            <Card className={classes.profilecard}>
                <CardContent>
                    <div className={classes.usermeta}>
                        <Gravatar email={user && user.email} size={100} rating="pg" default="monsterid" className={classes.avatar} />
                        <Typography className={classes.username}>
                            {user && user.fullname}
                        </Typography>
                    </div>

                    <div className={classes.itemcount}>
                        <Typography className={classes.count}>
                            <span className={classes.bold}>{user.items.length}</span> Item shared
                            </Typography>
                        <Typography className={classes.count}>
                            <span className={classes.bold}>{user.borrowed.length}</span> Item borrowed
                            </Typography>
                    </div>
                    <Typography className={classes.bio}>"{user.bio ? user.bio : "no bio provided."}"</Typography>

                </CardContent>
            </Card>
        </div>
    )
};

export default withStyles(styles)(ProfileCard);