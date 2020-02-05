import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles'
import { Typography } from '@material-ui/core/'


function CircularIndeterminate({ classes }) {
    return (
        <div className={classes.fullscreenloader}>
            <div className={classes.spinner}>
                <CircularProgress />
            </div>
            <Typography color="primary" className={classes.message}>
                "For it is in giving that we receive."
            </Typography>
        </div>



    );
}

export default withStyles(styles)(CircularIndeterminate);