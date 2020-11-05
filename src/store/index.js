import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import reducers from '../reducers/index'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const user = Cookie.getJSON('user') || null;
const initialState = {
    userData: {...user}
};
const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;