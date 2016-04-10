import React from 'react'
import {Component} from 'react'
import {reduxForm, addArrayValue} from 'redux-form'
import PureInput from './PureInput.jsx'
import BaseForm from './baseForm.jsx'
import {submitForm} from '../../../actions/index.jsx'
export const fields = [
    'card_type',
    'card_name',
    'item_id',
    'scheme',
    'statistics',
    'statTab',
    'title',
    'itemList[].resourceId',
    'itemList[].scheme',
    'itemList[].strList[]'
];
const getPrefix = (itemKey) => {
    let prefixText = '';
    switch(itemKey) {
        case 0:
            prefixText = '左侧';
            break;
        case 1:
            prefixText = '中间';
            break;
        case 2:
            prefixText = '右侧';
            break;
        default:
            prefixText = "-";
            break;
    }
    return prefixText;
}
class FocusForm extends Component{

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
        return (
            <div>
                <form onSubmit={handleSubmit(this._handler.bind(this))}>
                <BaseForm {...fields}/>
                <button className="btn btn-success" type="button" onClick={() => {
            fields.itemList.addField({
               resourceId:'--',
               scheme: '#',
               strList:['----','222','333']
            });
          }}><i className="fa fa-child"></i>Add ItemList
                </button>
                {
                    fields.itemList && fields.itemList.map && fields.itemList.map(function(item, index){
                        return (
                            <div className="form-group" key={index}>
                                <label className="col-xs-2 control-label">itemList #{index + 1}</label>

                                <div className="form-group row">
                                    <label className="col-xs-2 control-label">resourceId</label>
                                    <div className="col-xs-4">
                                        <PureInput type="text" placeholder="Child resourceId" field={item.resourceId}/>
                                    </div>

                                    <label className="col-xs-2 control-label">跳转schema</label>
                                    <div className="col-xs-4">
                                        <PureInput type="text" placeholder="Child scheme" field={item.scheme}/>
                                    </div>
                                </div>

                                {
                                    item.strList && item.strList.map && item.strList.map(function(strItem, itemKey) {
                                        return (
                                            <div className="form-group row" key={itemKey}>
                                                <label className="col-xs-4 control-label">{getPrefix(itemKey)}文案</label>
                                                <div className="col-xs-8" key={itemKey}>
                                                    <PureInput type="text" placeholder="strList strItem" field={strItem}/>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                                <button onClick={() => {fields.itemList.removeField(index)}} type="button" className="btn btn-sm btn-danger">
                                    <i className="fa fa-trash"></i>
                                    Remove
                                </button>
                            </div>
                        );
                    })
                }
                    <button className="btn btn-sm btn-success" type="submit"> 保存当前组件数据</button>
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
})(FocusForm);