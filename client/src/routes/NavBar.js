import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import logo from '../images/boomtown.svg';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Mutation } from 'react-apollo';
import { LOGOUT_MUTATION, VIEWER_QUERY } from '../apollo/queries';
import styles from './styles'


const NavBar = ({ classes, history }) => {



    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }
    return (

        <Mutation mutation={LOGOUT_MUTATION} refetchQueries={[{ query: VIEWER_QUERY }]} >
            {logout => (
                < React.Fragment >
                    <div className={classes.root}>
                        <AppBar position="static">
                            <Toolbar>

                                <NavLink to="/welcome" variant="h6" className={classes.title} activeClassName="selected">
                                    <img className={classes.logo} src={logo} alt="logo" />
                                </NavLink>

                                <IconButton className={classes.sharebutton} aria-label="display more actions" edge="end" color="inherit">
                                    <AddCircleIcon className={classes.icon} to="/share" />
                                    <NavLink className={classes.sharelink} color="inherit" to="/share" activeClassName="selected">
                                        SHARE SOMETHING
                            </NavLink>
                                </IconButton>

                                <IconButton onClick={handleClick} aria-haspopup="true" aria-label="display more actions" aria-controls="simple-menu" edge="end" color="inherit">
                                    <MoreIcon />
                                </IconButton>

                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    className={classes.dropmenu}
                                >
                                    <MenuItem onClick={handleClose} >
                                        <NavLink className={classes.profile} to="/profile" activeClassName="selected">
                                            <FingerprintIcon />
                                            <Typography>
                                                Profile
                                        </Typography>
                                        </NavLink>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <button className={classes.logout} onClick={() => {
                                            logout();
                                        }}><PowerSettingsNewIcon />Logout
                                </button>
                                    </MenuItem>
                                </Menu>

                            </Toolbar>
                        </AppBar>
                    </div>
                </React.Fragment>
            )}
        </Mutation>
    )

}



export default withRouter(withStyles(styles)(NavBar));