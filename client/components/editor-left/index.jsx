import React from 'react'
import {PropTypes} from 'react'
import { DragSource, DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import _ from 'lodash'

import ComponentsMap from '../../config/componentsMap.jsx'
import {defaultFocusData, defaultGroupData,onepicInfo,carouselData, horRankCard, rankDetailScoreData, rankDetailTrendData, singleCardData} from '../../config/pageJson.jsx'
import ItemTypes from '../../config/item-types.jsx'
import './index.scss'
const configlist = [
    {
        type: 1,
        name: 'carousel',
        desp: '轮播图',
        defaultData: carouselData
    },

    {
        type: 2,
        name: 'single-card',
        desp: '单行卡片',
        defaultData: singleCardData
    },

    {
        type: 3,
        name: 'one-pic-info',
        desp: '单图卡片',
        defaultData: onepicInfo
    },

    {
        type: 5,
        name: 'focus',
        desp: '热点卡片',
        defaultData: defaultFocusData
    },

    {
        type: 6,
        name: 'hor-rank-card',
        desp: '横向排行',
        defaultData: horRankCard
    },
    {
        type: 7,
        name:'rank-detail-score',
        desp: '二级榜单趋势',
        defaultData: rankDetailTrendData
    },

    {
        type: 8,
        name:'rank-detail-score',
        desp: '二级榜单分数',
        defaultData: rankDetailScoreData
    },

    {
        type: 11,
        name:'Group',
        desp: 'group容器',
        defaultData: defaultGroupData
    },

];
/**
 * Implements the drag source contract.
 */
const editorLeftSource = {
    beginDrag(props) {
        return {
            name: props.name,
            defaultData:_.assignIn({},props.defaultData)
        }
    },
    endDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();
        let defaultData = props.defaultData;
        console.log('drag>',dropResult)
        if (dropResult) {
            console.log(
                `You dropped ${item.name} into ${dropResult.name}!`
            );
            //props.onAddCom(defaultData);
            //window.alert( // eslint-disable-line no-alert
            //    `You dropped ${item.name} into ${dropResult.name}!`
            //);
        }
    }
};
/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}
class DragComItemContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { isDragging, connectDragSource } = this.props;
        let props = this.props;
        return connectDragSource(
            <div>
                <div className="com-item" key={props.type}>{props.desp + '-' + props.type}</div>
                {isDragging && ' (and I am being dragged now)'}
            </div>
        );
    }
}
class EditorLeft extends React.Component {
    constructor(props) {
        super(props);
    }
    //clickHandler(defaultData, e) {
    //    //debugger;
    //    // just test ,by focus default data for focus component
    //    this.props.onAddCom(defaultData);
    //}
    render() {
        let that = this;
        return (
            <div className="_namespace">
                {
                    configlist.map(function(value, index) {
                        let DragcomwraperSource = DragSource(ItemTypes.CARD, editorLeftSource, collect)(DragComItemContainer);
                        let tmpProps = _.assignIn({key:index},value,that.props);
                        return  React.createElement(DragcomwraperSource,tmpProps);
                    })
                }
            </div>
        );
    }
}
export default EditorLeft
//export default DragDropContext(HTML5Backend)(EditorLeft)