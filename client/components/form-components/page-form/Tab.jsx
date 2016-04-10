import React from 'react'
import {Component} from 'react'
import PureInput from '../base/PureInput.jsx'

export default class TabForm extends Component {
    render() {
        //const {
        //    title,
        //    page_id,
        //    page_type,
        //    item_id,
        //    rn,
        //    params,
        //    } = this.props;
        const {tab} = this.props;
        //debugger;
        return (
            <div>
                <button className="btn btn-success"
                        type="button"
                        onClick={() => {
                                tab.addField({
                                     title:'',
                                     page_id:'',
                                     page_type:'',
                                     item_id:'',
                                     rn:'',
                                     params:''
                                });
                              }}><i className="fa fa-child"></i>Tab增加一个
                </button>

                {
                    (tab.length > 0) && tab.map(function(item, index) {
                        return (
                            <div key={index}>
                                <div className="form-group">
                                    <label className="col-xs-4 control-label">Tab标题</label>
                                    <div className="col-xs-8">
                                        <PureInput type="text" placeholder="title" field={item.title}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-xs-2 control-label">page_id</label>
                                    <div className="col-xs-4">
                                        <PureInput type="text" placeholder="page_id" field={item.page_id}/>
                                    </div>

                                    <label className="col-xs-2 control-label">page_type</label>
                                    <div className="col-xs-4">
                                        <PureInput type="text" placeholder="pagepage_type_id" field={item.page_type}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-xs-2 control-label">item_id</label>
                                    <div className="col-xs-4">
                                        <PureInput type="text" placeholder="item_id" field={item.item_id}/>
                                    </div>

                                    <label className="col-xs-2 control-label">rn</label>
                                    <div className="col-xs-4">
                                        <PureInput type="text" placeholder="rn" field={item.rn}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-xs-4 control-label">params</label>
                                    <div className="col-xs-8">
                                        <PureInput type="text" placeholder="params" field={item.params}/>
                                    </div>
                                </div>
                            </div>

                        );
                    })
                }
            </div>
        );
    }
}