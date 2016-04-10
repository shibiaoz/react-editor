import {connect} from 'react-redux'
import EditorMiddle from '../../components/editor-middle/index.jsx'
import {setActiveCard} from '../../actions/index.jsx'
const mapStateToProps = (state) => {
    console.log('ContainerEditorMiddle mapStateToProps->', state);
    return {
        cards: state.cards,
        active: state.active
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onClickItem: function(_id, params,_idChild) {
            //debugger;
            dispatch(setActiveCard(_id, params,_idChild));
        },
        dispatch: dispatch
    }
}
const ContainerEditorMiddle = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorMiddle);

export default ContainerEditorMiddle;
//export default DragDropContext(HTML5Backend)(ContainerEditorMiddle)