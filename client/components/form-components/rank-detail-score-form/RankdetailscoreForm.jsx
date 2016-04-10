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
    'desc',
    'desc2',
    'picUrl',
    'subTitle',
    'ratio', //高/宽
];
class RankdetailscoreForm extends Component{

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
                desc,
                desc2,
                picUrl,
                subTitle,
                ratio
            } = fields;
        return (
            <div>
                <form onSubmit={handleSubmit(this._handler.bind(this))}>
                    <BaseForm {...fields}/>

                    <div className="form-group">
                        <label className="col-xs-2 control-label">title</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="title" field={title}/>
                        </div>

                        <label className="col-xs-2 control-label">subTitle</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="subTitle" field={subTitle}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-xs-2 control-label">排名</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="排名" field={rank}/>
                        </div>

                        <label className="col-xs-2 control-label">图片链接</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="图片链接" field={picUrl}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-xs-2 control-label">描述</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="描述" field={desc}/>
                        </div>

                        <label className="col-xs-2 control-label">下一个描述(上映时间)</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="下一个描述上映时间" field={desc2}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-xs-2 control-label">高/宽</label>
                        <div className="col-xs-4">
                            <PureInput type="text" placeholder="高/宽" field={ratio}/>
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
})(RankdetailscoreForm);