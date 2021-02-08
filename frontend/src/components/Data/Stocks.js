import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { loadStocks } from "../../store/actions/stocks";
import { BeatLoader } from "react-spinners";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const columns = [
  { id: 'sym', label: 'Stock Name'},
  { id: 'action', label: 'Action'}
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: "100vh",
  }
});

const Stocks = props => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    useEffect(() => {
        props.loadStocks();
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    if(props.loading){
        return (
            <div className="loader">
                <BeatLoader
                    size={150}
                    color={"#3399ff"}
                    loading={props.loading}
                    />
            </div>
        )
    }else{
        return (
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props && props.stocks.length > 0 && props.stocks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row}>
                                {columns.map((column) => {
                                    const value = row;
                                    if(column.id === "action"){
                                        let route = `/bar/${row}`
                                        return (
                                            <TableCell key={column.id}>
                                                <Tooltip title="View OHLC Data">
                                                    <a href={route} style={{color: "#66c2ff"}}><EqualizerIcon /></a>
                                                </Tooltip>
                                            </TableCell>
                                        );
                                    }else{
                                        return(
                                            <TableCell key={column.id}>
                                                {value}
                                            </TableCell>
                                        )
                                    }
                                })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={props.stocks.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    stocks: state.stocksReducer.stocks,
    loading: state.stocksReducer.isLoading
});

export default connect(mapStateToProps, { loadStocks })(Stocks);