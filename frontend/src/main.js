import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import Grid from "@material-ui/core/Grid";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Common/Header";
import Stocks from "./components/Data/Stocks";
import BarGraph from "./components/Data/Bar";

const Main = props => {
    return (
        <Grid container>
            <Grid item xs={12}>
            <Header />
            <ToastContainer closeOnClick hideProgressBar={true} transition={Zoom} />
            <Router>
                <div className="App">
                <Switch>
                    <Route exact path="/" component={Stocks} />
                    <Route exact path="/bar/:sym" component={BarGraph} />
                </Switch>
                </div>
            </Router>
            </Grid>
        </Grid>  
    );
}

export default Main;