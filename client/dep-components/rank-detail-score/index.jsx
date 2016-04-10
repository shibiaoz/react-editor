/**
 *  @author shibiaoz
 *  @date 2016-03-04
 *  二级榜单 分数排行榜
 * {
    "card_type": 8,
    "card_name": "rank-detail-score",
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "ranks": [
        {
            "rank": 1,
            "title": "少年少年少",
            "desc": "得到的点滴电影评",
            "desc2": "2016.01.01上映",
            "picUrl": "aaa",
            "subTitle": "9.7分"
        },
    ]
};
 */
import React from 'react';
import './index.scss';
import classnames from 'classnames';
class ScoreItem extends React.Component {
    constructor(props) {
        super(props)
        console.log(123);
    }
    render() {
        const props = this.props;
        let rank = parseInt(props.rank, 10);
        let classNameStr = classnames({
            'text': true,
            'num-1': rank == 1,
            'num-2': rank == 2,
            'num-3': rank == 3,
            'num-gt-4': rank > 3,
        });
        return (
            <div className="score-item">
                <div className="pic-wraper">
                    <a href={rank.scheme}>
                        <img src={props.picUrl}/>
                    </a>
                    <span className={classNameStr}>{rank}</span>
                </div>
                <div className="desc-wraper">
                    <div className="title">{props.title}</div>
                    <div className="desc">{props.desc}</div>
                    <div className="desc desc2">{props.desc2}</div>
                </div>
                <div className="sub-title">{props.subTitle}</div>
            </div>
        );
    }
}
export default class Rankdetailscore extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="_namespace">
                <ScoreItem  {...this.props} />
            </div>
        );
    }
}
