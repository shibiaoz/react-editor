import _ from 'lodash'
import GroupTypes from '../config/groupTypes.jsx'
/**
 * cards
 * state => array  => cards
 */
const getCards = (state = [], action) => {
    let type = action && action.type;
    console.log('getCards reducers ->',state, action);
    let _id,data, _idChild;
    switch (type) {
        case 'DRAG_COM':
            state = [...state, action.config];
            break;
        case 'SUBMIT_FORM':
            _id = action._id;
            _idChild = action._idChild;
            data = action.data;
            //debugger;
            if (_idChild >= 0) {
                state[_id]['cards'][_idChild] = _.assignIn({},state[_id]['cards'][_idChild], data);
            }
            else {
                state[_id] = _.assignIn({},state[_id], data);
            }

            state = [...state];
            //state = [].concat(state);
            //debugger;
            break;
        case 'ADD_CARD_TO_GROUP':
            _id = action._id;
            data = action.data;
            if (!state[_id]['cards'] || state[_id]['cards'].length < 1) {
                state[_id]['cards'] = [];
            }
            // 非group 类型card不能添加card
            // group 不能在添加group
            if (GroupTypes.indexOf(state[_id]['card_type']) > -1 && GroupTypes.indexOf(data['card_type']) < 0) {
                state[_id]['cards'].push(data);
                state = state.slice(0);
            }
            break;
        case 'DEL_CARD':
            _id = action._id;
            _idChild = action._idChild;
            if (typeof _idChild == 'undefined') {
                state.splice(_id,1);
            }else if(_id>=0 && _idChild>= 0) {
                state[_id] && state[_id]['cards'] && state[_id]['cards'].splice(_idChild,1)
            }
            state = [...state];
            break;
        case 'SET_EDIT_PAGE_CARDS':
            data = action.data;
            state = [].concat(data);
            break;
        case 'SET_DEFAULT':
            state = [];
            break;
        default:
            break;
    }
    // 暂且不知道如何在最终提交form时获取state 的值，先给暴露在window中
    //window.pageconfig = state;
    return state;
}
export default getCards;