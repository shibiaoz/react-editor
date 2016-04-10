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
    'title',
    'displayNum',
    'ratio',
    'scrollEnabled',
    'picType',
    'ranks[].resourceId',
    'ranks[].picUrl',
    'ranks[].picScheme',
    'ranks[].title',
    'ranks[].subTitle',
    'ranks[].bgColor',
    'ranks[].bgColorNight'
];
class HorrankcardForm extends Component{

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
        const { title,
            displayNum,
            ratio,
            scrollEnabled,
            picType} = fields;
        return (
            <div>
                <form onSubmit={handleSubmit(this._handler.bind(this))}>
                    <BaseForm {...fields}/>
                    <div className="form-group">
                        <label className="col-xs-4 control-label">title</label>
                        <div className="col-xs-8">
                            <PureInput type="text" placeholder="title" field={title}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-xs-2 control-label">displayNum</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="displayNum" field={displayNum}/>
                        </div>
                        <label className="col-xs-2 control-label">ratio</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="ratio" field={ratio}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-xs-2 control-label">scrollEnabled</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="scrollEnabled" field={scrollEnabled}/>
                        </div>
                        <label className="col-xs-2 control-label">picType</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="picType" field={picType}/>
                        </div>
                    </div>
                    <button className="btn btn-success"
                            type="button"
                            onClick={() => {
                                fields.ranks.addField({
                                    "resourceId":"",
                                    "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-04/01b505ccac1b166a5a323d907144228e.png",
                                    "picScheme": "",
                                    "title": "星球大",
                                    "subTitle": "9.1分",
                                    "bgColor": "",
                                    "bgColorNight": ""
                                });
                              }}><i className="fa fa-child"></i>增加一个
                    </button>
                    {
                        fields.ranks && fields.ranks.map && fields.ranks.map(function(item, index){
                            return (
                                <div key={index} className="form-group">
                                    <span style={{marginLeft:20}}>index-{index+1}</span>
                                    <div className="form-group">
                                        <label className="col-xs-2 control-label">title</label>
                                        <div className="col-xs-4">
                                            <PureInput type="text" placeholder="title" field={item.title}/>
                                        </div>

                                        <label className="col-xs-2 control-label">subTitle</label>
                                        <div className="col-xs-4">
                                            <PureInput type="text" placeholder="subTitle" field={item.subTitle}/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-xs-2 control-label">picUrl</label>
                                        <div className="col-xs-4">
                                            <PureInput type="text" placeholder="picUrl" field={item.picUrl}/>
                                        </div>

                                        <label className="col-xs-2 control-label">picScheme</label>
                                        <div className="col-xs-4">
                                            <PureInput type="text" placeholder="picScheme" field={item.picScheme}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-4">
                                            <PureInput type="text" placeholder="resourceId" field={item.resourceId}/>
                                        </div>

                                        <div className="col-xs-4">
                                            <PureInput type="text" placeholder="bgColor" field={item.bgColor}/>
                                        </div>

                                        <div className="col-xs-4">
                                            <PureInput type="text" placeholder="bgColorNight" field={item.bgColorNight}/>
                                        </div>
                                    </div>
                                    <button onClick={() => {fields.ranks.removeField(index)}}
                                            type="button"
                                            style={{marginLeft:20}}
                                            className="btn btn-danger btn-sm">
                                        <i className="fa fa-trash"></i>
                                        Remove
                                    </button>
                                </div>

                            );
                        })
                    }
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
})(HorrankcardForm);