import * as CONSTANT from './constants'
import Axios from "axios";
import Cookie from "js-cookie";

const login = ({username, password}) => async (dispatch) => {
    dispatch({ type: CONSTANT.LOGIN_REQUEST, payload: {} });
    try {
        const { data } = await Axios.post("/auth/signin",
            {username, password}
        );
        dispatch({ type: CONSTANT.LOGIN_SUCCESS, payload: data.data});
        Cookie.set("user", JSON.stringify(data.data));
    } catch (error) {
        dispatch({ type: CONSTANT.LOGIN_FAIL, payload: error.response.data });
    }
};
export {login};