import React from 'react'
import {Component} from 'react'
import {reduxForm, addArrayValue} from 'redux-form'
import PureInput from '../base/PureInput.jsx'
import BaseForm from '../base/baseForm.jsx'
import {submitForm} from '../../../actions/index.jsx'
export const fields = [
    // base
    'card_type',
    'card_name',
    'item_id',
    'scheme',
    'statistics',
    'statTab',
    // extend
    'rank',
    'title',
    'radio',
    'iconUrl',
    'picUrl',
    'picTrendType',
    'picTrendUrl'
];
class RankdetailtrendFrom extends Component{

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
        const {
            rank,
            title,
            radio,
            iconUrl,
            picUrl,
            picTrendType,
            picTrendUrl
            } = fields;
        return (
            <div>
                <form onSubmit={handleSubmit(this._handler.bind(this))}>
                    <BaseForm {...fields}/>

                    <div className="form-group">
                        <span style={{marginLeft:20}}>趋势数据</span>
                        <div className="form-group">
                            <label className="col-xs-4 control-label">title</label>
                            <div className="col-xs-8">
                                <PureInput type="text" placeholder="title" field={title}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-xs-2 control-label">rank</label>
                            <div className="col-xs-4">
                                <PureInput type="text" placeholder="rank" field={rank}/>
                            </div>

                            <label className="col-xs-2 control-label">radio</label>
                            <div className="col-xs-4">
                                <PureInput type="text" placeholder="radio" field={radio}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-xs-2 control-label">picUrl</label>
                            <div className="col-xs-4">
                                <PureInput type="text" placeholder="picUrl" field={picUrl}/>
                            </div>

                            <label className="col-xs-2 control-label">iconUrl</label>
                            <div className="col-xs-4">
                                <PureInput type="text" placeholder="iconUrl" field={iconUrl}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-xs-2 control-label">picTrendType</label>
                            <div className="col-xs-4">
                                <PureInput type="text" placeholder="picTrendType" field={picTrendType}/>
                            </div>

                            <label className="col-xs-2 control-label">picTrendUrl</label>
                            <div className="col-xs-4">
                                <PureInput type="text" placeholder="picTrendUrl" field={picTrendUrl}/>
                            </div>
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
})(RankdetailtrendFrom);