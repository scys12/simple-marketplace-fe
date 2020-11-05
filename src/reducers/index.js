import { combineReducers } from "redux";
import {tenLatestItemReducer, categoriesReducer} from '../containers/App/reducer';
import {loginReducer} from '../containers/Login/reducer';
import {registerReducer} from '../containers/Register/reducer';
export default combineReducers({
    latestItem: tenLatestItemReducer,
    categories: categoriesReducer,
    userData: loginReducer,
    registerData: registerReducer,
});