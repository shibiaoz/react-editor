import _ from 'lodash'
const pageInfo = (state = {}, action) => {
    let type = action.type;
    switch(type) {
        case 'SET_PAGE_INFO':
            //debugger;
            state =  _.assignIn({}, state, action.data);
            if (parseInt(state.type, 10) === 2) {
                // type=2 ,无tab
                state.tab = [];
            }
            return state;
            break;
        case 'SET_DEFAULT':
            return {};
            break;
        default:
            return state;
    }
}
export default pageInfo;