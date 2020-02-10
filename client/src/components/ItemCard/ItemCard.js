import React from 'react';
import styles from './styles';
import moment from 'moment';
import Gravatar from "react-gravatar";
import { Link } from 'react-router-dom';
import { ViewerContext } from "../../context/ViewerProvider";
import {
    withStyles,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core/';


const ItemCard = ({ item, classes }) => {
    let daysAgo = moment(item && item.created).fromNow()
    return (
        <ViewerContext.Consumer>
            {({ viewer, loading }) => (
                <Card className={classes.card}>
                    <CardActionArea>

                        <Link to={item.itemowner.id && `/profile/${item.itemowner.id}`}>
                            <CardMedia
                                className={classes.media}
                                image={item.imageurl ? item.imageurl : "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10:750/jb7production-uploads/2017/07/dreamstatefestivallogo-2017.jpg"}
                                title={item && item.title}
                            />

                            <CardContent className={classes.cardcontent}>
                                <div className={classes.usermeta}>
                                    <Gravatar email={item.itemowner.email ? item.itemowner.email : viewer.email} size={100} rating="pg" default="monsterid" className={classes.avatar} />
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
                                    <div className={classes.tagscontainer}>
                                        <Typography className={classes.tags}>
                                            {item && item.tags.map((tag) => tag.title).join(", ")}
                                        </Typography>
                                    </div>
                                    <Typography className={classes.carddescription}>
                                        {item && item.description}
                                    </Typography>
                                </div>
                            </CardContent>
                        </Link>
                    </CardActionArea>
                    <CardActions>
                        <Button className={classes.button} size="small" color="primary">
                            Borrow
          </Button>
                    </CardActions>
                </Card>
            )}
        </ViewerContext.Consumer>
    )
};

export default withStyles(styles)(ItemCard);