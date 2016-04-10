import React from 'react'
import classnames from 'classnames'
import './index.scss'
import replyIcon from './images/btn_floor_reply_n@2x.png'
import floorSee from './images/btn_floor_see_n@2x.png'
/**
 * title 标题
 * desc 简介
 * pic 图片链接
 * tag 吧名或者其他
 * icons[] => [
 *     {
 *         url icon的链接
 *         urlNight 夜间地址
 *         type 1代表赞，2 评论，4 为pv,贴吧娱乐只用到三个
 *         content 一般为数字
 *     }
 * ]
 *
 */
export default class Onepicinfo extends React.Component {
    constructor (props) {
        super(props);
    }
    state:{name:11,age:22}
    getProps() {
        return this.props;
    }
    // 赞
    getSupportIcon(iconInfo, i) {
        let str = String(iconInfo.content);
        let content = str.length >=5 ? str.substring(0,5) + '+' : str;
        return (
            <span className="support"  key={i}>
                <img src={floorSee}/>
                <span className="text">{content}</span>
            </span>
        );
    }
    // 评论
    getCommentIcon(iconInfo, i) {
        let str = String(iconInfo.content);
        let content = str.length >=5 ? str.substring(0,5) + '+' : str;
        return (
            <span className="comment" key={i}>
                <img src={replyIcon}/>
                <span className="text">{content}</span>
            </span>
        );
    }
    //获取icons
    genIcons(icons) {
        var that = this;
        return icons.map(function (icon, i) {
            var type = parseInt(icon.type);
            switch(type) {
                case 4:
                    return that.getSupportIcon(icon, i);
                case 2:
                    return that.getCommentIcon(icon, i);
                default: return "";
            }
        });
    }
    render() {
        var props = this.props;
        var that = this;
        return (
            <div className="_namespace">
                <div className="one-pic-left">
                    <div className="desp">
                        <a href={props.scheme}>
                        {props.title}
                        </a>
                    </div>
                    <div className="bottom-column">
                        <span className="tag">{props.tag}</span>
                        {that.genIcons(props.icons)}
                    </div>
                </div>
                <div className="one-pic-right">
                    <img src={props.pic}/>
                </div>
            </div>
        );
    }
}
const onepicInfo = {
    "card_type": 4,
    "card_name": "one-pic-info",
    "src": "http://tb1.bdstatic.com/tb/r/image/2016-03-02/ecb4202e7bd1e349da412deae50969a6.png",
    "desp": "[测试]暴走的肾上腺！今夏最爽片《碟5》要来了！竞请大家期待本...",
    "scheme": "http://tieba.baidu.com/p/4243123798",
    "icons":[
        {
            "url": "icon的链接",
            "urlNight": "夜间地址",
            "type":1,
            "content": 8888
        },
        {
            "url": "icon的链接",
            "urlNight": "夜间地址",
            "type":2,
            "content": 9999
        }
    ]
};
// Onepicinfo.defaultProps = onepicInfo;
