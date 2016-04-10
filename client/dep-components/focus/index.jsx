import React from 'react'
import './index.scss'

export default class Focus extends React.Component {
    constructor (props, context) {
        super(props, context)
    }

    render() {
        let data = this.props;
        let items = data.itemList.map(function (item, i) {
            return (
                <div className="focus-item" key={i}>
                    <span className="title">
                        {item.strList[0]}
                    </span>
                    <span className="info">
                        {item.strList[1]}
                    </span>
                    <a className="live" href={item.scheme}>
                        {item.strList[2]}
                    </a>
                </div>
            );
        });
        console.log('data.title->',data.title)
        return (
           <div className="_namespace">
                <div className="f-media">
                    <div className="f-media-left">
                        {data.title}
                    </div>
                    <div className="f-media-right">
                        {items}
                    </div>
                </div>
           </div>
        );
    }
}

Focus.defaultProps =   {
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
