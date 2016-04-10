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
    'pic',
    'tag',
    'icons[].url',
    'icons[].urlNight',
    'icons[].type',
    'icons[].content',
];
const bgDanger = {
    backgroundColor: '#fcf8e3'
}
class OnepicinfoForm extends Component{

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
        const {pic,tag,icons,title} = fields;
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
                        <label className="col-xs-4 control-label">tag</label>
                        <div className="col-xs-8">
                            <PureInput type="text" placeholder="tag" field={tag}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-xs-4 control-label">pic</label>
                        <div className="col-xs-8">
                            <PureInput type="text" placeholder="pic" field={pic}/>
                        </div>
                    </div>
                    <div className="form-group row col-12" style={bgDanger}>
                        <div className="col-md-2"></div>
                        <div className="col-md-2">图片url</div>
                        <div className="col-md-2">夜间图片url</div>
                        <div className="col-md-3">2代表评论，4为pv</div>
                        <div className="col-md-2">描述</div>
                    </div>
                    {
                        fields.icons && fields.icons.map && fields.icons.map(function(item, index){
                            return (
                                <div className="form-group" key={index}>
                                    <label className="col-xs-2 control-label">itemList #{index + 1}</label>
                                    <div className="col-xs-2">
                                        <PureInput type="text" placeholder="url" field={item.url}/>
                                    </div>

                                    <div className="col-xs-2">
                                        <PureInput type="text" placeholder="urlNight" field={item.urlNight}/>
                                    </div>

                                    <div className="col-xs-2">
                                        <PureInput type="text" placeholder="type" field={item.type}/>
                                    </div>

                                    <div className="col-xs-2">
                                        <PureInput type="text" placeholder="content" field={item.content}/>
                                    </div>
                                    <button onClick={() => {fields.icons.removeField(index)}} type="button" className="btn btn-sm btn-danger">
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
})(OnepicinfoForm);