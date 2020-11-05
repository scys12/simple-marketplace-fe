import * as CONSTANT from './constants'
const INITIAL_STATE = {loading: true,};

const registerReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case  CONSTANT.REGISTER_REQUEST:
            return { ...state };
        case CONSTANT.REGISTER_SUCCESS:
            return {loading:false, status: action.payload };
        case CONSTANT.REGISTER_FAIL:
            return {...state, ...action.payload };
        default:
            return state;
    }
};
export {registerReducer};