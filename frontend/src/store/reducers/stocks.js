import {
    GET_STOCKS_SUCCESS,
    GET_STOCKS_ERROR,
    LOADING_STOCKS
} from "../actions/types";

const initialState = {
    stocks: [],
    isLoading: false
};

export default function stocksReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING_STOCKS:
            return {
                ...state,
                isLoading: true
            };
        case GET_STOCKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                stocks: action.payload.stocks
            };
        case GET_STOCKS_ERROR:
            return {
                ...state,
                isLoading: false,
                stocks: []
            };
        default:
            return state;
    }
}