import * as CONSTANT from './contants'
import Axios from "axios";

const getTenLatestItem = () => async (dispatch) => {
    dispatch({ type: CONSTANT.TEN_LATEST_ITEM_REQUEST, payload: {} });
    try {
        const { data } = await Axios.get("/latest");
        dispatch({ type: CONSTANT.TEN_LATEST_ITEM_SUCCESS, payload: data});
    } catch (error) {
        dispatch({ type: CONSTANT.TEN_LATEST_ITEM_FAIL, payload: error.message });
    }
};

const getCategories = () => async (dispatch) => {
    dispatch({ type: CONSTANT.CATEGORIES_REQUEST, payload: {} });
    try {
        const { data } = await Axios.get("/categories");
        dispatch({ type: CONSTANT.CATEGORIES_SUCCESS, payload: data});
    } catch (error) {
        dispatch({ type: CONSTANT.CATEGORIES_FAIL, payload: error.message });
    }
};

export {getTenLatestItem, getCategories}