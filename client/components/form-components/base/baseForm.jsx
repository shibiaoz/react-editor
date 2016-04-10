import React from 'react'
import {Component} from 'react'
import PureInput from './PureInput.jsx'
import './index.scss'
/**
 * card_type:5
 card_name:"focus"
 item_id:""
 flip_id:""
 scheme:""
 statistics:"lego_entertainment_click"
 statTab:4
 title:"正在追剧", 【title 不是base的，去除。。。。】
 */
export default class BaseForm extends Component {
    render() {
        const {
            card_type,
            card_name,
            item_id,
            scheme,
            statistics,
            statTab,
            title,
            } = this.props;
        return (
            <div className="_namespace">
                <div className="base_form_wraper">
                    <div className="form-group">
                        <label className="col-xs-4 control-label">card_type</label>
                        <div className="col-xs-8">
                            <PureInput type="text" readOnly="readonly" placeholder="card_type" field={card_type}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-xs-4 control-label">card_name</label>
                        <div className="col-xs-8">
                            <PureInput type="text" readOnly="readonly" placeholder="card_name" field={card_name}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-xs-4 control-label">item_id</label>
                        <div className="col-xs-8">
                            <PureInput type="text" placeholder="item_id" field={item_id}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-xs-4 control-label">scheme</label>
                        <div className="col-xs-8">
                            <PureInput type="text" placeholder="scheme" field={scheme}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-xs-4 control-label">statistics</label>
                        <div className="col-xs-8">
                            <PureInput type="text" placeholder="statistics" field={statistics}/>
                        </div>
                    </div>


                    <div className="form-group">
                        <label className="col-xs-4 control-label">statTab</label>
                        <div className="col-xs-8">
                            <PureInput type="text" placeholder="statTab" field={statTab}/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}