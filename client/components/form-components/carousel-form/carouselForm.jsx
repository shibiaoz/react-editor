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
    'descColor',
    'descColorNight',
    'duration',
    'ratio',
    'descOnPic',
    'pics[].picId',
    'pics[].pic',
    'pics[].scheme',
    'pics[].desc',
];
const bgDanger = {
    backgroundColor: '#fcf8e3'
}
class CarouselForm extends Component{

    _handler(data) {
        //debugger;
        let props = this.props;
        let _id = props._id;
        let _idChild = props._idChild;
        let dispatch = props.dispatch;
        dispatch(submitForm(_id, data, _idChild));
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
        const {duration,ratio,descOnPic,descColorNight,descColor} = fields;
        return (
            <div>
                <form onSubmit={handleSubmit(this._handler.bind(this))}>
                    <BaseForm {...fields}/>
                    <div className="form-group">
                        <label className="col-xs-2 control-label">duration</label>
                        <div className="col-xs-2">
                            <PureInput type="text" placeholder="duration" field={duration}/>
                        </div>
                        <label className="col-xs-2 control-label">ratio</label>
                        <div className="col-xs-2">
                            <PureInput type="text" placeholder="ratio" field={ratio}/>
                        </div>
                        <label className="col-xs-2 control-label">descOnPic</label>
                        <div className="col-xs-2">
                            <PureInput type="text" placeholder="descOnPic" field={descOnPic}/>
                        </div>
                    </div>
                    <button className="btn btn-success" type="button" onClick={() => {
            fields.pics.addField({
                "picId": 110,
                "pic": "http://tb1.bdstatic.com/tb/one.png",
                "scheme": "http://tieba.baidu.com/n/beyond/thread/110?isHot=1",
                "desc": "lego scheme"
            });
          }}><i className="fa fa-child"></i>增加一个轮播图片
                    </button>
                    <div style={bgDanger} className="form-group row col-12">
                        <div className="col-md-2"></div>
                        <div className="col-md-2">图片picId</div>
                        <div className="col-md-2">轮播图片地址</div>
                        <div className="col-md-2">轮播跳转链接</div>
                        <div className="col-md-2">轮播图描述</div>
                    </div>
                    {
                        fields.pics && fields.pics.map && fields.pics.map(function(item, index){
                            return (
                                <div  key={index}>
                                    <div className="form-group">
                                        <label className="col-xs-2 control-label">pics #{index + 1}</label>
                                        <div className="col-xs-2">
                                            <PureInput type="text" title="轮播图片picId" placeholder="picId" field={item.picId}/>
                                        </div>

                                        <div className="col-xs-2">
                                            <PureInput type="text" title="轮播图片地址" placeholder="pic" field={item.pic}/>
                                        </div>

                                        <div className="col-xs-2">
                                            <PureInput type="text" title="轮播图跳转链接" placeholder="scheme" field={item.scheme}/>
                                        </div>

                                        <div className="col-xs-2">
                                            <PureInput type="text"  title="轮播图描述" placeholder="desc" field={item.desc}/>
                                        </div>
                                        <button onClick={() => {fields.pics.removeField(index)}} type="button" className="btn btn-sm btn-danger">
                                            <i className="fa fa-trash"></i>
                                            Remove
                                        </button>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-xs-2 control-label">描述文字颜色</label>
                                        <div className="col-xs-4">
                                            <PureInput type="text" placeholder="duration" field={descColor}/>
                                        </div>

                                        <label className="col-xs-2 control-label">描述文字夜间颜色</label>
                                        <div className="col-xs-4">
                                            <PureInput type="text" placeholder="descColorNight" field={descColorNight}/>
                                        </div>
                                    </div>
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
})(CarouselForm);