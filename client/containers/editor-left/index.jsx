import {connect} from 'react-redux'
import EditorLeft from '../../components/editor-left/index.jsx'
const mapStateToProps = (state) => {
    return {

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAddCom: function(params) {
            dispatch({
                type:'DRAG_COM',
                config: params
            });
        }
    }
}
const ContainerEditorLeft = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorLeft);

export default ContainerEditorLeft;