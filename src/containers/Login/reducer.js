import * as CONSTANT from './constants'
const INITIAL_STATE = {loading: true,};

const loginReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case CONSTANT.LOGIN_REQUEST:
            return { loading:true, ...state };
        case CONSTANT.LOGIN_SUCCESS:
            return {loading:false, ...action.payload };
        case CONSTANT.LOGIN_FAIL:
            return { loading:false, error: action.payload };
        default:
            return state;
    }
};
export {loginReducer};