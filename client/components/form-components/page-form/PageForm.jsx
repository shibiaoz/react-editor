import React from 'react'
import {Component} from 'react'
import _ from 'lodash'
import {reduxForm, addArrayValue} from 'redux-form'
import PureInput from '../base/PureInput.jsx'
import BaseForm from '../base/baseForm.jsx'
import TabForm from './Tab.jsx'
import FloatBtn from './FloatBtn.jsx'
import {setPageInfo} from '../../../actions/index.jsx'
export const fields = [
    'title',
    'type',
    'sync',
    'desc',
    'share.title',
    'share.picNight',
    'share.pic',
    'share.scheme',
    'share.type',
    'share.extra',
    'tab[].title',
    'tab[].page_id',
    'tab[].page_type',
    'tab[].item_id',
    'tab[].rn',
    'tab[].params',
    'float_btn.icon_url',
    'float_btn.icon_url_night',
    'float_btn.scheme'
];
const getTab = (flag,tab) => {
    //debugger;
    if (flag) {
        return (<TabForm tab={tab}/>);
    }
}

class PageForm extends Component{

    _handler(data) {
        //debugger;
        let props = this.props;
        let _id = props._id;
        let dispatch = props.dispatch;
        //data = _.assignIn({},props, data);
        dispatch(setPageInfo(data));
        // dispath to modify page data
    }
    componentDidMount() {
        const {resetForm} = this.props;
        // 如果上一个保存之后form 切到list 在回来需要reset
        //resetForm();
        console.log('resetForm',this.props);
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
            type,
            sync,
            share,
            tab,
            float_btn,
            desc} = fields;
        return (
            <div>
                <form onSubmit={handleSubmit(this._handler.bind(this))}>

                    <div className="form-group">
                        <label className="col-xs-4 control-label">页面标题</label>
                        <div className="col-xs-8">
                            <PureInput type="text" placeholder="title" field={title}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-xs-4 control-label">页面描述</label>
                        <div className="col-xs-8">
                            <PureInput type="text" placeholder="desc" field={desc}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-xs-2 control-label">顶部tab导航栏</label>
                        <div className="col-xs-4">
                            <select
                                {...type}
                                value={type.value || ''}
                                >
                                <option></option>
                                <option value="1">有Tab</option>
                                <option value="2">无Tab</option>
                            </select>
                        </div>

                        <label className="col-xs-2 control-label">端支持</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="是否双端还是某个端" field={sync}/>
                        </div>
                    </div>

                    <FloatBtn {...float_btn}/>

                    <div className="form-group">
                        <label className="col-xs-2 control-label">分享标题</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="分享标题" field={share.title}/>
                        </div>
                        <label className="col-xs-2 control-label">分享图片url</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="分享图片url" field={share.pic}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-xs-2 control-label">分享夜间模式图标地址</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="分享夜间模式图标地址" field={share.picNight}/>
                        </div>
                        <label className="col-xs-2 control-label">类型</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="1，跳转，2，分享" field={share.type}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-xs-4 control-label">scheme 跳转或分享的url </label>
                        <div className="col-xs-8">
                            <PureInput type="text" placeholder="scheme 跳转或分享的url " field={share.scheme}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-xs-4 control-label">extra</label>
                        <div className="col-xs-8">
                            <PureInput type="text" placeholder="extra扩展" field={share.extra}/>
                        </div>
                    </div>
                    {getTab(type.value ==1, tab)}
                    <button className="btn btn-success" type="submit"> 保存</button>
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
})(PageForm);