import React from 'react'
import {Component} from 'react'
import PureInput from '../base/PureInput.jsx'

export default class TabForm extends Component {
    render() {
        const {
            icon_url,
            icon_url_night,
            scheme
            } = this.props;
        return (
            <div>
                <div className="form-group">
                    <label className="col-xs-4 control-label">悬浮按钮图标url </label>
                    <div className="col-xs-8">
                        <PureInput type="text" placeholder="悬浮按钮 icon_url" field={icon_url}/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-xs-4 control-label">悬浮按钮图标夜间模式 </label>
                    <div className="col-xs-8">
                        <PureInput type="text" placeholder="悬浮按钮图标夜间模式 icon_url_night" field={icon_url_night}/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-xs-4 control-label">悬浮按钮scheme</label>
                    <div className="col-xs-8">
                        <PureInput type="text" placeholder="悬浮按钮scheme " field={scheme}/>
                    </div>
                </div>
            </div>
        );
    }
}