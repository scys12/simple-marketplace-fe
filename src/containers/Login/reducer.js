import * as CONSTANT from './contants'
const INITIAL_STATE = {loading: true,};

const loginReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case  CONSTANT.TEN_LATEST_ITEM_REQUEST:
            return { ...state };
        case CONSTANT.TEN_LATEST_ITEM_SUCCESS:
            return {loading:false, ...action.payload };
        case CONSTANT.TEN_LATEST_ITEM_FAIL:
            return {...state, error: action.payload };
        default:
            return state;
    }
};
export {loginReducer};