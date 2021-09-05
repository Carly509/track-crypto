import { combineReducers } from "redux";
import CryptoReducers from './CryptoReducers';

export default combineReducers({
    crypto: CryptoReducers
})