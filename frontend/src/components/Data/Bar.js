import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import { io } from "socket.io-client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
const ENDPOINT = process.env.REACT_APP_BACKEND_SOCKET_ENDPOINT;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const BarGraph = props => {

    const classes = useStyles();

    let { sym } = useParams();
    const [ohlcData, updateOhlc] = useState([]);
    const [returns, updateReturns] = useState({
        total_returns: 0,
        latest_bar_returns: 0
    });
    
    useEffect(() => {
        const socket = io(ENDPOINT);

        socket.emit('subscribe', sym , (error) => {
            if(error) {
                console.log(error);
            }
        });

        socket.on('ohlc_notify', data => {
            if(ohlcData.length >= 40){
                ohlcData.shift();
            }
            updateOhlc(oldData => [...oldData, data]);
        });

        socket.on('performance_statistics', data => {
            updateReturns({
                ...returns,
                total_returns: data.totalTradeReturns,
                latest_bar_returns: data.latestBarReturns
            });
            console.log(returns);
        });

        socket.on('reset_market', data => {
            updateOhlc([]);
            updateReturns({
                ...returns,
                total_returns: 0,
                latest_bar_returns: 0
            });
        });

        return ()=>{ 
            socket.disconnect(); 
        }

    }, [sym]);
    return(
        <div>
            <div style={{marginTop: 15}}>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={3}>
                        <div style={{textAlign: "left", marginLeft: 30, marginTop: 20}}><b>Stock Name:  </b>{sym}</div>
                    </Grid>
                    <Grid item xs={3}>
                        {returns.total_returns > 0
                            ? <Paper className={classes.paper} style={{display: "inline-flex"}}>
                                < ArrowUpwardIcon style={{ fontSize: 35, color: "green"}} />
                                <b style={{ fontSize: 15, marginTop: 5, marginLeft: 5}}>
                                    Total Trade Returns: {returns.total_returns} %
                                </b>
                            </Paper>
                            : <Paper className={classes.paper} style={{display: "inline-flex"}}>
                                < ArrowDownwardIcon style={{ fontSize: 35, color: "red"}} />
                                <b style={{ fontSize: 15, marginTop: 5, marginLeft: 5}}>
                                    Total Trade Returns: {returns.total_returns} %
                                </b>
                            </Paper>
                        }
                    </Grid>
                    <Grid item xs={3}>
                        {returns.latest_bar_returns > 0
                            ? <Paper className={classes.paper} style={{display: "inline-flex"}}>
                                < ArrowUpwardIcon style={{ fontSize: 35, color: "green"}} />
                                <b style={{ fontSize: 15, marginTop: 5, marginLeft: 5}}>
                                    Latest Bar Returns: {returns.latest_bar_returns} %
                                </b>
                            </Paper>
                            : <Paper className={classes.paper} style={{display: "inline-flex"}}>
                                < ArrowDownwardIcon style={{ fontSize: 35, color: "red"}} />
                                <b style={{ fontSize: 15, marginTop: 5, marginLeft: 5}}>
                                    Latest Bar Returns: {returns.latest_bar_returns} %
                                </b>
                            </Paper>
                        }
                    </Grid>
                </Grid>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <ResponsiveContainer width="95%" height={180}>
                                <BarChart data={ohlcData}>
                                <XAxis dataKey="bar_num" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="open" fill="#8884d8" />
                                <Bar dataKey="close" fill="#cc80ff" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <ResponsiveContainer width="95%" height={180}>
                                <BarChart data={ohlcData}>
                                <XAxis dataKey="bar_num" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="high" fill="#82ca9d" />
                                <Bar dataKey="low" fill="#ff6666" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <ResponsiveContainer width="95%" height={180}>
                                <BarChart data={ohlcData}>
                                <XAxis dataKey="bar_num" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="volume" fill="#4d94ff" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default BarGraph;