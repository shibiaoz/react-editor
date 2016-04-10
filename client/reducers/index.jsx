import { combineReducers } from 'redux';
const filterReducer =  (state = 1, action) => {
    let type = action.type;
    switch(type) {
        case 'limit':
        debugger;
            return ++state;
        default:
            return state;
    }
}

const list = (state=[1,2,3,4,5], action) => {
    let type = action.type;
    switch(type) {
        case 'list':
            return state;
        default:
            return state;
    }
}
const Reducers = combineReducers({
    num: filterReducer,
    list: list
});
export default Reducers;
