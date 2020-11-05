import * as CONSTANT from './constants'

const INITIAL_STATE = {loading: true,};

const tenLatestItemReducer = (state=INITIAL_STATE, action) => {
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

const INITIAL_STATE_CATEGORY = {
    staticCategories: [
        {
            id:'0',
            name:'Home',
            link:'',
        },
        {
            id: '1',
            name: 'All Products',
            link:'products',
        }
    ],
    loading: true,
};

const categoriesReducer = (state=INITIAL_STATE_CATEGORY, action) => {
    switch(action.type){
        case  CONSTANT.CATEGORIES_REQUEST:
            return { ...state };
        case CONSTANT.CATEGORIES_SUCCESS:
            return {...state, loading:false, types:action.payload };
        case CONSTANT.CATEGORIES_FAIL:
            return {...state, error: action.payload };
        case CONSTANT.SELECTED_MENU :
            return {...state, selected: action.payload};
        case CONSTANT.REMOVE_SELECTED_MENU :
            return {...state, selected:null};
        default:
            return state;
    }
};

export {tenLatestItemReducer, categoriesReducer};