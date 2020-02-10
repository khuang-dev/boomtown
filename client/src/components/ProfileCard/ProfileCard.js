import React from 'react';
import styles from './styles';
import Gravatar from "react-gravatar";
import {
    withStyles,
    Card,
    CardContent,
    Typography
} from '@material-ui/core/';
import PropTypes from 'prop-types';


const ProfileCard = ({ user, classes }) => {
    ProfileCard.propTypes = {
        user: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };
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