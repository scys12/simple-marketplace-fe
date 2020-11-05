import * as CONSTANT from './constants'
import Axios from "axios";

const registerUser = ({username, password, email}) => async (dispatch) => {
    dispatch({ type: CONSTANT.REGISTER_REQUEST, payload: {} });
    try {
        await Axios.post("/auth/register",
            {username, password, email}
        );
        dispatch({ type: CONSTANT.REGISTER_SUCCESS, payload: true});
    } catch (error) {
        dispatch({ type: CONSTANT.REGISTER_FAIL, payload: error.response.data });
    }
};
export {registerUser};