import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import mainLogo from '../../assets/images/mainLogo.png';
import { resetMarket } from "../../store/actions/stocks";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

const Header = props => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
            <Toolbar>
                <div className={classes.title}>
                    <a href="/data"><img src={mainLogo} alt="StoxKart" style={{height: 45, width: 130}} /></a>
                </div>
                <div><a style={{fontSize: 18, lineHeight: 2}} href="/"><strong>Stocks</strong></a>
                <Button style={{float: "right", marginLeft: 20}} onClick={props.resetMarket} variant="contained" color="danger"> Reset Market </Button></div>
            </Toolbar>
            </AppBar>
        </div>
    );

};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { resetMarket })(Header);