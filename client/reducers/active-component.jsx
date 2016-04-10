import _ from 'lodash'
/**
 *  点击某个组件，设置active 状态，
 *  这个用来控制要显示的form,
 *  _id 是一级索引，_idChild是二级索引，因为不需要group 里嵌套group 所以最多到两层
 *  _id = -1 表示是页面的form编辑
 */
const getActiveCards = (state = {}, action) => {
    let type = action && action.type;
    console.log('getActiveCards reducers ->',state, action);
    switch (type) {
        case 'SET_ITEM_ACTIVE':
            //debugger;
            if (action._id != state._id) {
                state = _.assignIn({},{_id: action._id, _idChild: action._idChild},{com: action.com});
                /**
                 * 我之前是这么写的，通过redux devtools 查看state active是修改的
                 * 但是传递state active props 的组件没有重新render啊
                 * 因为state是不可变的，这个不可变的意思是如果有改动就返回一个新的state
                 * state = _.assignIn(state,{_id: action._id},{com: action.com});
                 */
            }else if (action._id == state._id && action._idChild != state._idChild) {
                state = _.assignIn({},{_id: action._id, _idChild: action._idChild},{com: action.com});
            }
            break;
        case 'SET_PAGE_FORM_ACTIVE':
            //if (action._id != state._id) {
            //    state = _.assignIn({},{_id: action._id,com:action.com});
            //}
            state = _.assignIn({},{_id: action._id,com:action.com});
            break;
        case 'SET_DEFAULT':
            state = {};
            break;
        default:
            break;
    }
    return state;
}
export default getActiveCards;