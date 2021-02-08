import axios from "axios";

import {
    LOADING_STOCKS,
    GET_STOCKS_SUCCESS,
    GET_STOCKS_ERROR
} from "./types";

import {
    toast
} from "react-toastify";

export const loadStocks = () => (dispatch) => {
    dispatch({
        type: LOADING_STOCKS
    });

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    axios
        .get(process.env.REACT_APP_BACKEND_URL+"stocks", config)
        .then(res => {
            dispatch({
                type: GET_STOCKS_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err);
            toast.error("Error getting stocks!");
            dispatch({
                type: GET_STOCKS_ERROR
            });
        });
};

export const resetMarket = () => () => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    axios
        .get(process.env.REACT_APP_BACKEND_URL+"reset", config)
        .then(res => {
            toast.success("Successfully Reset Markets!");
        })
        .catch(err => {
            console.log(err);
            toast.error("Error resetting markets!");
        });
}