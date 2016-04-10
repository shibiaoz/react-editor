import React from 'react'
import ComponentsMap from '../../config/componentsMap.jsx'
import classnames from 'classnames'
import _ from 'lodash'
import './index.scss'

export default class Group extends React.Component {
    constructor (props) {
        super(props);
    }

    getOneComponent(com, i) {
        // com = JSON.parse(com);
        if (com && typeof com == 'string') {
            com = JSON.parse(com);
        }
        var props = _.assignIn({}, com);
        if (com) {
            let tmpComponent = ComponentsMap[com.card_type];
            if (tmpComponent) {
                // 后端数据出来个tye 101,组件不存在，就会运行时报错
                return React.createElement('div', {key:i}, React.createElement(tmpComponent, props));
            }
            // return React.createElement('div', {key:i}, React.createElement(ComponentsMap[com.card_type], props));
        }

    }

    render() {
        let that = this;
        let cards = that.props.cards.map(function (com, i) {
            return that.getOneComponent(com, i);
        });

        let className = classnames({
           group: true,
           'show-line': this.props.showLine
        });

        return (
            <div className="_namespace">
                <div className={className}>
                    {cards}
                </div>
            </div>
        )
    }
}
const defaultProps = {
    "card_type": 11,
    "card_name": "group",
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "statistics": "",
    "statTab": "",
    "showLine": 1,
    "cards": [
        {
            "card_type": 1,
            "card_name": 'carousel',
            "item_id": "",
            "flip_id": "",
            "scheme": "",
            "statistics": "lego_entertainment_click",
            "statTab": 1,
            "duration": 3000,
            "ratio": 0.5,
            "descOnPic": 3,
            "pics": [
                {
                    "picId": 110,
                    "pic": "http://tb1.bdstatic.com/tb/one.png",
                    "scheme": "http://tieba.baidu.com/n/beyond/thread/110?isHot=1",
                    "desc": "lego scheme"
                },
                {
                    "picId": 109,
                    "pic": "http://tb1.bdstatic.com/tb/two.png",
                    "scheme": "http://tieba.baidu.com/n/beyond/thread/109?isHot=1",
                    "desc": "lego scheme"
                },
                {
                    "picId": 27,
                    "pic": "http://tb1.bdstatic.com/tb/three.png",
                    "scheme": "http://tieba.baidu.com/n/beyond/thread/27?isHot=1",
                    "desc": "这是一个焦点图"
                },
                {
                    "picId": 5,
                    "pic": "http://tb1.bdstatic.com/tb/four.png",
                    "scheme": "http://tieba.baidu.com/n/beyond/thread/5?isHot=1",
                    "desc": "【冰冰邦邦】董子健吧全体“咚咚锵”与您共庆元宵佳节"
                }
            ]
        }, {
            "card_type": 5,
            "card_name": 'focus',
            "item_id": "",
            "flip_id": "",
            "scheme": "",
            "statistics": "lego_entertainment_click",
            "statTab": 4,
            "title": "正在追剧",
            "itemList": [
                {
                    "resourceId": "99",
                    "strList": [
                        "【韩剧】太阳的后裔",
                        "周六日更新4、5集",
                        "图文直播"
                    ],
                    "scheme": "http://tieba.baidu.com/p/4375862649"
                },
                {
                    "resourceId": "54",
                    "strList": [
                        "程序员的世界观察",
                        "还没有拍摄呢",
                        "图文直播"
                    ],
                    "scheme": "http://tieba.baidu.com/p/4243123798"
                },
                {
                    "resourceId": "53",
                    "strList": [
                        "北京现代生活",
                        "还没有拍摄呢",
                        "图文直播"
                    ],
                    "scheme": "http://tieba.baidu.com/p/4243123798"
                }
            ]
        }
    ]
};
// Group.defaultProps = defaultProps;
