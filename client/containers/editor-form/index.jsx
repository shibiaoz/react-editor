import {connect} from 'react-redux'
import EditorForm from '../../components/editor-form/index.jsx'

const mapStateToProps = (state) => {
    return {
        activeItem: state.active
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

const ContainerEditorForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorForm);

export default ContainerEditorForm;