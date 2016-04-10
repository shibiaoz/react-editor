import {connect} from 'react-redux'
import EditorHeader from '../../components/editor-header/index.jsx'

const mapStateToProps = (state) => {
    return {
        activeItem: state.active,
        cards: state.cards,
        pageInfo: state.pageInfo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}

const ContainerEditorHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorHeader);

export default ContainerEditorHeader;