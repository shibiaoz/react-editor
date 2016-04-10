import React from 'react';
import {Link} from 'react-router';
import _ from 'lodash';
import request from 'superagent';
import { Router, hashHistory } from 'react-router';
import {pageInfo} from '../../config/pageJson.jsx';
//import './index.scss'
import {setPageFormActive} from '../../actions/index.jsx';
const marginL = {
    marginLeft:20
};
export default class Editorheader extends React.Component {
    constructor(props) {
        super(props);
    }
    clickHandler() {
        // edit page data
        // 页面form的默认数据, if edited by fetch data
        let com = pageInfo;
        let props =  this.props;
        if (props && props.pageInfo) {
            com = _.assignIn({}, pageInfo, props.pageInfo);
        }
        props.dispatch(setPageFormActive(-1,com));

    }
    clickHandlerSave() {
        // save, send data to server
        //debugger;
        let props = this.props;
        let cards = props.cards;
        let pageInfo = props.pageInfo;
        let dataObj = _.assignIn({},pageInfo,{cards:cards});
        let url = '/blitz/create';
        let pageId = pageInfo.pageId;
        if (!props.pageInfo) {
            alert('编辑页面数据的时候请保存');
            return false;
        }
        if (cards.length < 1) {
            alert('数据cards为0');
            return false;
        }
        //console.log('__data__',dataObj);
        if (pageId) {
            url = '/blitz/update';
        }
        //.type('form')   不支持多层Object
        request.post(url)
            .send(dataObj)
            .end(function(err, res) {
                //if (err) {
                //    alert('创建失败' + err.msg);
                //}else if( res.body && res.body.no === 0) {
                //    hashHistory.push('/list');
                //}else {
                //    alert('创建失败' + res.body.msg);
                //}
                /**
                 * 因hhvm 冷启动问题，后端创建返回数据经常是创建成功但是
                 * 返回不对，所以暂时对与非err的情况，全部返回成功
                 */
                if (err) {
                    alert('创建失败' + err.msg);
                }
                else {
                    alert('创建成功');
                    hashHistory.push('/list');
                }
            });
    }
    render() {
        return (
            <div className="_namespace">
                <div className="logo_title">
                    Blitz 在线编辑系统
                </div>
                <div className="btn-entrance">
                    <button className="btn btn-success"
                            onClick={this.clickHandler.bind(this)}
                            type="button">
                        编辑页面数据
                    </button>
                    <button className="btn btn-success"
                            onClick={this.clickHandlerSave.bind(this)}
                            style={{marginLeft:20}}
                            type="button">
                        提交
                    </button>
                    <Link style={marginL}
                          className="btn btn-success"
                          to="/list">
                        列表
                    </Link>
                </div>

            </div>
        );
    }
}
