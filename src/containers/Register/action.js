import * as CONSTANT from './constants'
import Axios from "axios";
import Cookie from "js-cookie";

const login = (username, password) => async (dispatch) => {
    dispatch({ type: CONSTANT.LOGIN_REQUEST, payload: {} });
    try {
        const { data } = await Axios.post("/signin",
            {username, password}
        );
        dispatch({ type: CONSTANT.LOGIN_SUCCESS, payload: data.data});
        Cookie.set("user", JSON.stringify(data.data));
    } catch (error) {
        console.log(error)
        dispatch({ type: CONSTANT.LOGIN_FAIL, payload: error.message });
    }
};
export {login};