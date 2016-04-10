/**
 * @author shibiaoz
 * @date 2016-03-03
 * 单行卡片
 const singleCard = {
    "card_type": 2,
    "card_name": 'single-card',
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "statistics": "lego_single_card_click",
    "statTab": 4,
    "title": "北京线下吧友聚会报名",
    "showLeftLine": 1,
    "showLeftIcon": 1,
    "icon": {
        "url": "",
        "urlNight":"也就模式，暂且不需要",
        "type": 3,// 3代表通知， :5,frs_ba_ticket;6,frs_game;7,frs_news;8,new_live,目 前贴吧娱乐只用3,对于新业务推荐下发url和urlNight,不推荐下发type
        // 2016-03-09 获知被扁平化，只下发了type 没有icon object
        // from  @CientRd 张晓波
    },
    "moreButton": {
        "moreText": "更多",
        "moreColor": "blue",
        "moreColorNight": "black",
        "moreScheme": "tieba://...",
        "moreSchemeWeb": "http://www.baidu.com"
    }
};
*/
import React from 'react';
import icon1 from './images/btn_wishes_n@2x.png'
import './index.scss';

function Title(props) {
    let moreButton = props.moreButton;
    let moreText = moreButton && moreButton.moreText;
    var titleStyle = {
        width: '70%'
    };
    if (moreText.length > 2) {
        titleStyle = {
            width: '60%'
        }
    }
    return (<div className="title" style={titleStyle}>{props.title}</div>);
}
export default class Singlecard extends React.Component {
    constructor(props) {
        super(props);
    }
    getIcon(props) {
        if (props.icon && Object.getOwnPropertyNames(props.icon).length > 0) {
            let src = '';
            if (props.showLeftIcon < 1) {
                return "";
            }
            if (props.icon.url) {
                src = props.icon.url;
            }
            else {
                let type = parseInt(props.icon.type || props.type,10)
                switch(type) {
                    case 3: src = icon1;
                        break;
                    default:
                        break;
                }
            }
            return (
                <div className="icon"><img src={src}/></div>
            );
        }
    }
    getLine(props) {
        if (props.showLeftLine) {
            return (
                <div className="line"></div>
            );
        }
    }
    getMoreButton(props) {
        let moreButton = props.moreButton;
        let styleObj = {};
        if (moreButton && moreButton.moreText) {
            let moreText = moreButton.moreText;
            let href = moreButton.moreSchemeWeb;
            styleObj['color'] = '#' + moreButton.moreColor;
            return (
                <a style={styleObj} className="more-button" href={href}>{moreText}</a>
            );
        }
    }
    render() {
        let props = this.props;
        return (
            <div className="_namespace">
                {this.getLine(this.props)}
                {this.getIcon(this.props)}
                <Title {...props} />
                {this.getMoreButton(this.props)}
            </div>
        );
    }
}
