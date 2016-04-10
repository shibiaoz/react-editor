import React from 'react'
import { DropTarget, DragSource } from 'react-dnd';
import _ from 'lodash'

import ComponentWrapper from '../component-wrapper/index.jsx'
import ComponentsMap from '../../config/componentsMap.jsx'
import Phone from 'fit-phone'
import './index.scss'

import ItemTypes from '../../config/item-types.jsx'

const style = {

};

/**
 * 之前拖拽之后是在dragSource endDrag 中去触发action
 * 但是嵌套的drag target ，父容器的drop 覆盖了子元素的drop
 * 没法搞？ 想通过组织冒泡的方式，不成功，dnd的设计就没提供组织冒泡
 * 时间紧急，暂且用一种hack的方式，在全局有个标识，_childDrop 如果
 * true就说明在子容器已经触发了，服容器就不应该触发，
 * 这是后也应该后续增强判断，父容器的card_type 必须是group 才能触发修改state的值
 *
 */
const boxTarget = {
    drop(props, monitor, component) {
        if (window._childDrop) {
            // 子元素group 落地card
            window._childDrop = false;
            return ;
        }
        let item = monitor.getItem();
        let defaultData = item && item.defaultData;

        if (defaultData) {
            // 最外层加入一个card
            props.dispatch({
                type:'DRAG_COM',
                config: defaultData
            });
        }
        window._childDrop = false;
        console.log('config->', defaultData);
        return { name: 'Dustbin!!!' };

        const hasDroppedOnChild = monitor.didDrop();
        if (hasDroppedOnChild && !props.greedy) {
            return { name: 'Dustbin!!!' };
        }
        component.setState({
            hasDropped: true,
            hasDroppedOnChild: hasDroppedOnChild
        });
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}
class EditorMiddle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasDropped: false,
            hasDroppedOnChild: false
        };
    }
    getOneComponent(com, i) {
        let that = this;
        try {
            if(typeof com == 'string') {
                com = JSON.parse(com);
            }
            var props = _.assignIn({}, com);
            let component = ComponentsMap[com.card_type];
            if (component) {
                return React.createElement(
                    ComponentWrapper,
                    {
                        key:i,
                        _id:i,
                        com:com,
                        component:component,
                        active: that.props.active,
                        onClickItem: that.props.onClickItem,
                        dispatch: that.props.dispatch
                    }
                );
            }
        }
        catch(err) {
            throw new Error("parse json error");
        }
    }
    render() {
        let that = this;
        const { canDrop, isOver, connectDropTarget,hasDropped } = this.props;
        const isActive = canDrop && isOver;

        let backgroundColor = '#fff';
        if (isActive) {
            backgroundColor = 'darkgreen';
        } else if (canDrop) {
            backgroundColor = 'darkkhaki';
        }
        console.log('editor-middle-component render-->');
        return connectDropTarget(
            <div style={{ ...style, backgroundColor }} className="_namespace">
                {isActive ?
                    '释放' :
                    ''
                }
                <Phone>
                {
                    this.props.cards && this.props.cards.map(function (com, i) {

                        return that.getOneComponent(com, i, that.props.active);
                    })
                }
                </Phone>
            </div>
        );
    }
}
export default DropTarget(ItemTypes.CARD, boxTarget, collect)(EditorMiddle);