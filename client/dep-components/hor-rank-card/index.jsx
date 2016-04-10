/**
 * @author: shibiaoz
 * @date 2016-03-04
 * 横向排行榜，支持图圆形和方形
 *
 {
    "card_type": 6,
    "card_name": "hor-rank-card",
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "statistics": "lego_single_card_click",
    "title": "电影好评帮",
    "displayNum": 5,
    "ratio":1,
    "scrollEnabled":true,
    "picType": 1, // 1 圆形 2 方形
    "ranks": [
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-03/62446b481c81edd09e0188ce85359014.png",
            "picScheme": "",
            "title": "星球大战星球大战星球大战星球大战",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        }
    ]
}
*/
import React from 'react';
import classnames from 'classnames';
import iconNo1 from './images/icon_grade_star_no1@2x.png';
import iconNo2 from './images/icon_grade_star_no2@2x.png';
import iconNo3 from './images/icon_grade_star_no3@2x.png';
import './index.scss';
export default class Horrankcard extends React.Component {
    constructor(props) {
        super(props);
    }
    selectCard() {
        const props = this.props;
        let picType = parseInt(props.picType);
        if (picType === 1) {
            return (<Circlecard {...props}/>)
        }
        else if(picType === 2) {
            return (<Squarecard {...props}/>)
        }
        else {
            return "";
        }
    }
    render () {
        // console.log('---->',this.props)
        return (
            <div className="_namespace">
                <div className="title">
                    <div className="line"></div>
                    <div className="text">{this.props.title}</div>
                    <div className="more">
                        <a href={this.props.scheme}>{this.props.btnText}</a>
                    </div>
                </div>
                {this.selectCard()}
            </div>
        );
    }
}
class Circlecard extends React.Component {
    constructor(props) {
        super(props)
    }
    getIcon(item, i) {
        ++i;
        if (i > 3 ) {
            return (
                <div className="rank-icon">
                    <div className="rank-num">{i}</div>
                </div>
            );
        }
        else {
            let icon = null;
            switch(i) {
                case 1: icon = iconNo1;
                    break;
                case 2: icon = iconNo2;
                    break;
                case 3: icon = iconNo3;
                    break;
            }
            if (icon != null){
                return (<div className="rank-icon"><img src={icon}/></div>);
            }
        }
    }
    getItem() {
        const props = this.props;
        var that = this;
        // console.log(props);
        return props.ranks.map(function (item, i) {
            return (
                <div className="item" key={i}>
                    <div className="pic">
                        <a href={item.picScheme}>
                            <img src={item.picUrl} style={{borderRadius:'50%'}}/>
                        </a>
                    </div>
                    <div className="desc">
                        {that.getIcon(item, i)}
                        <div className="title">{item.title}</div>
                    </div>
                </div>
            );
        })
    }
    render () {
        return (
            <div className="circle-wraper wraper">
                {this.getItem()}
            </div>
        );
    }
}

class Squarecard extends React.Component {
    constructor(props) {
        super(props)
    }
    getRankIcon(i) {
        let rank = ++i;
        let classNameStr = classnames({
            'rank': true,
            'num-1': rank == 1,
            'num-2': rank == 2,
            'num-3': rank == 3,
            'num-gt-4': rank > 3,
        });
        return (<div className={classNameStr}>{rank}</div>);
    }
    getItem() {
        const props = this.props;
        var that = this;
        return props.ranks.map(function (item, i) {
            return (
                <div className="item"  key={i}>
                    <div className="pic">
                        <a href={item.picScheme}>
                            <img src={item.picUrl}/>
                        </a>
                        {that.getRankIcon(i)}
                    </div>
                    <div className="desc">{item.title}</div>
                    <div className="desc-sub-title">{item.subTitle}</div>
                </div>
            );
        })
    }
    render () {
        return (
            <div className="square-wraper wraper">
                {this.getItem()}
            </div>
        );
    }
}
