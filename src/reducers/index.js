import { combineReducers } from "redux";
import {tenLatestItemReducer, categoriesReducer} from '../containers/App/reducer';
export default combineReducers({
    latestItem: tenLatestItemReducer,
    categories: categoriesReducer,
});