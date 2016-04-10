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
    'textSize',
    'maxLines',
    'showLeftLine',
    'showLeftIcon',
    'icon.url',
    'icon.urlNight',
    'icon.type',
    'moreButton.moreText',
    'moreButton.moreColor',
    'moreButton.moreColorNight',
    'moreButton.moreScheme',
    'moreButton.moreSchemeWeb'
];
class SinglecardForm extends Component{

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
            showLeftLine,
            textSize,
            icon,
            moreButton,
            maxLines,
            showLeftIcon} = fields;
        return (
            <div>
                <form onSubmit={handleSubmit(this._handler.bind(this))}>
                    <BaseForm {...fields}/>

                    <div className="form-group">
                        <label className="col-xs-4 control-label">摘要</label>
                        <div className="col-xs-8">
                            <PureInput type="text" placeholder="摘要" field={title}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-xs-2 control-label">多行限制</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="多行限制" field={maxLines}/>
                        </div>

                        <label className="col-xs-2 control-label">文字大小</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="文字大小" field={textSize}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-xs-2 control-label">是否展示左边线</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="showLeftLine" field={showLeftLine}/>
                        </div>

                        <label className="col-xs-2 control-label">是否展示左边的icon</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="showLeftIcon" field={showLeftIcon}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-xs-2 control-label">icon图片</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="icon.url" field={icon.url}/>
                        </div>

                        <label className="col-xs-2 control-label">icon图片类型</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="icon.url" field={icon.type}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-xs-4 control-label">icon图片夜间模式</label>
                        <div className="col-xs-8">
                            <PureInput type="text" placeholder="icon.urlNight" field={icon.urlNight}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-xs-2 control-label">更多内容</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="moreButton.moreText" field={moreButton.moreText}/>
                        </div>

                        <label className="col-xs-2 control-label">moreColor</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="moreButton.moreColor" field={moreButton.moreColor}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-xs-2 control-label">moreColorNight</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="moreButton.moreColorNight" field={moreButton.moreColorNight}/>
                        </div>

                        <label className="col-xs-2 control-label">moreScheme</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="moreButton.moreScheme" field={moreButton.moreScheme}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-xs-4 control-label">moreSchemeWeb</label>
                        <div className="col-xs-8">
                            <PureInput type="text" placeholder="moreButton.moreSchemeWeb" field={moreButton.moreSchemeWeb}/>
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
})(SinglecardForm);