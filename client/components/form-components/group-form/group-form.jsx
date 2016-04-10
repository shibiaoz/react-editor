import React from 'react'
import {Component} from 'react'
import {reduxForm, addArrayValue} from 'redux-form'
import PureInput from '../base/PureInput.jsx'
import BaseForm from '../base/baseForm.jsx'
import {submitForm} from '../../../actions/index.jsx'
export const fields = [
    'card_type',
    'card_name',
    'item_id',
    'scheme',
    'statistics',
    'statTab',
    'title',
    'showLine'
];
class GroupForm extends Component{

    _handler(data) {
        //debugger;
        let props = this.props;
        let _id = props._id;
        let _idChild = props._idChild;
        let dispatch = props.dispatch;
        dispatch(submitForm(_id, data, _idChild));
        //alert(JSON.stringify(data));
    }
    render() {
        const {
            addValue,
            fields,
            handleSubmit,
            resetForm,
            invalid,
            submitting
            } = this.props;
        const {showLine} = fields;
        return (
            <div>
                <form onSubmit={handleSubmit(this._handler.bind(this))}>
                    <BaseForm {...fields}/>
                    <div className="form-group">
                        <label className="col-xs-4 control-label">showLine</label>
                        <div className="col-xs-8">
                            <PureInput type="text" placeholder="showLine" field={showLine}/>
                        </div>
                    </div>
                    <button className="btn btn-success" type="submit"> 保存当前组件数据</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'deep',
    fields
}, undefined, {
    addValue: addArrayValue // mapDispatchToProps (will bind action creator to dispatch)
})(GroupForm);