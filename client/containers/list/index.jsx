import Listitems from '../../components/list/index.jsx';
import { connect } from 'react-redux'
const getListByNum = (list, num) => {
    // list.filter(function (item) {
    //     return item > num;
    // });
    return list;
}
const mapStateToProps = (state, props) => {
    // debugger;
    return {
        list2: getListByNum(state.list, state.num)
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    debugger;
    return {
        onClick: () => {
            debugger;
            dispatch({
                type: 'limit',
                num: ownProps.num
              });
        }
    }
}
const ListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(Listitems);
export default ListItem;
