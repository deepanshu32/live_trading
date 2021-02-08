import { combineReducers } from "redux";
import stocksReducer from './stocks';

export default combineReducers({
   stocksReducer: stocksReducer
});