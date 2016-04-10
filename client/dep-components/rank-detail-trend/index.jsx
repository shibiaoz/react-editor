/**
 * @author shibiaoz
 * @date 2016-03-03
 * 二级榜单，趋势榜
 *
 *  {
    "card_type": 7,
    "card_name": 'bless-card',
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "ranks": [
        {
            "rank":1,
            "title": "少年少年少少"
            "radio": 1,
            "picUrl": "图片链接",
            "iconUrl": "icon的链接",
            "picTrendType": "1",// 1 up ,3 down ,2 eq
            "picTrendUrl": "url ...."
        },
    }
 *
 */

import React from 'react';
import './index.scss';
import iconNo1 from './images/icon_grade_star_no1@2x.png';
import iconNo2 from './images/icon_grade_star_no2@2x.png';
import iconNo3 from './images/icon_grade_star_no3@2x.png';
import iconUp from './images/icon_arrow_ranking_up@2x.png';
import iconDown from './images/icon_arrow_ranking_down@2x.png';
class Trenditem extends React.Component {
    constructor(props) {
        super(props);
    }
    renderRankNum(rankInfo) {
        let num = parseInt(rankInfo.rank, 10);
        if (num > 3 ){
            return num;
        }
        else {
            let imageIcon = null;
            switch(num) {
                case 1: imageIcon = rankInfo.iconUrl ? rankInfo.iconUrl : iconNo1;
                    break;
                case 2: imageIcon = rankInfo.iconUrl ? rankInfo.iconUrl : iconNo2;
                    break;
                case 3: imageIcon = rankInfo.iconUrl ? rankInfo.iconUrl : iconNo3;
                    break;
                default:
                    break;
            }
            if (imageIcon != null) {
                return (<img src={imageIcon} alt={num}/>)
            }

        }
    }
    renderTrend(rankInfo) {
        let picTrendType = parseInt(rankInfo.picTrendType, 10);
        let picTrendUrl = rankInfo.picTrendUrl;
        let picTrendImg = null;
        if (picTrendUrl && picTrendUrl.length > 0 && picTrendUrl.indexOf('http')) {
            picTrendImg = picTrendUrl;
        }
        else {
            switch(picTrendType) {
                case 1: picTrendImg = iconUp;
                    break;
                case 2: picTrendImg = iconDown;
                    break;
                case 3: picTrendImg = iconUp;
                    // 3 是持平,UE图中没有持平的图，暂且写写死
                    break;
                default:
                    break;
            }
        }
        if (picTrendImg != null) {
            return (<img src={picTrendImg} alt="趋势图"/>);
        }
    }
    render() {
        const rankInfo = this.props;
        return (
            <div className="trend-item">
                <div className="rank">
                    {this.renderRankNum(rankInfo)}
                </div>
                <div className="pic">
                    <a href={rankInfo.scheme}>
                        <img src={rankInfo.picUrl}/>
                    </a>
                </div>
                <div className="title">{rankInfo.title}</div>
                <div className="trend">
                    {this.renderTrend(rankInfo)}
                </div>
            </div>
        );
    }
}
export default class Rankdetailtrend extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="_namespace">
                <Trenditem {...this.props}/>
            </div>
        );
    }
}
