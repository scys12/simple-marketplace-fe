import * as CONSTANT from './constants'
import Axios from "axios";

const getTenLatestItem = () => async (dispatch) => {
    dispatch({ type: CONSTANT.TEN_LATEST_ITEM_REQUEST, payload: {} });
    try {
        const { data } = await Axios.get("/latest");
        dispatch({ type: CONSTANT.TEN_LATEST_ITEM_SUCCESS, payload: data.data});
    } catch (error) {
        dispatch({ type: CONSTANT.TEN_LATEST_ITEM_FAIL, payload: error.response.data });
    }
};

const getCategories = () => async (dispatch) => {
    dispatch({ type: CONSTANT.CATEGORIES_REQUEST, payload: {} });
    try {
        const { data } = await Axios.get("/categories");
        dispatch({ type: CONSTANT.CATEGORIES_SUCCESS, payload: data.data});
    } catch (error) {
        dispatch({ type: CONSTANT.CATEGORIES_FAIL, payload: error.response.data });
    }
};

const selectMenu = name => (dispatch, getState) => {
    const{ staticCategories, types} = getState().categories;
    if (staticCategories.find(category => category.name === name) || types.find(type => type.name === name)) {
        dispatch({type: CONSTANT.SELECTED_MENU, payload: name})
    }else{
        dispatch({ type: CONSTANT.REMOVE_SELECTED_MENU})
    }
}

export {getTenLatestItem, getCategories, selectMenu}