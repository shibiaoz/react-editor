import React from 'react'
import ContainerEditorLeft from '../../containers/editor-left/index.jsx'
import ContainerEditorMiddle from '../../containers/editor-middle/index.jsx'
import ContainerEditorForm from '../../containers/editor-form/index.jsx'
import './index.scss'
export default class EditorContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="_namespace">
                <ContainerEditorLeft/>
                <ContainerEditorMiddle/>
                <ContainerEditorForm/>
            </div>
        );
    }
}