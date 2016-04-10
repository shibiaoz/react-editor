import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import { DropTarget, DragSource } from 'react-dnd';
import classnames from 'classnames'
//import $ from 'jquery'

import './index.scss'
import {GROUPTYPES} from '../../config/group-types.jsx'
import ItemTypes from '../../config/item-types.jsx'
import {addCardToGroup, delCard} from '../../actions/index.jsx'
const style = {

};
function getStyle(backgroundColor) {
    return {
        border: '1px solid rgba(0,0,0,0.2)'
    };
}

const boxTarget = {
    drop(props, monitor, component) {
        //debugger;
        window._childDrop = true;
        console.log('wraper---------',monitor.getItem())
        let dispatch = props.dispatch;
        let item = monitor.getItem();
        let defaultData = item && item.defaultData;
        let _id = props._id;
        dispatch(addCardToGroup(_id,defaultData));

        return { name: 'Group'};

        //const hasDroppedOnChild = monitor.didDrop();
        //if (hasDroppedOnChild && !props.greedy) {
        //    return { name: 'Group',ext:'wraper' };
        //}
        //component.setState({
        //    hasDropped: true,
        //    hasDroppedOnChild: hasDroppedOnChild
        //});
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true })
    };
}
class ComponentWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasDropped: false,
            hasDroppedOnChild: false
        };
    }
    canDrop(e) {
        debugger;
        e.stopPropagation();
    }
    componentDidMount() {

    }
    clickHandler(e) {
        //debugger;
        console.log('click -')
        let props = this.props;
        let _id = props._id;
        let _idChild = props._idChild;
        if (_idChild >= 0) {
            e.stopPropagation();
        }

        let com = props.com;
        let params = _.assignIn({},com);
        let type = com.card_type;
        //debugger;
        if (GROUPTYPES.indexOf(type) === -1) {
            // 非group 类型
            props.onClickItem(_id, params, _idChild);
        }
    }
    clickHandler2() {
        //debugger;
        console.log('click double')
        let props = this.props;
        let _id = props._id;
        let com = props.com;
        let params = _.assignIn({},com);
        let type = com.card_type;
        if (GROUPTYPES.indexOf(type) > -1) {
            props.onClickItem(_id, params);
        }
    }
    delHandler(e) {
        e.stopPropagation();
        let tmpProps = _.assignIn({},this.props, this.props.com);
        let dispatch = tmpProps.dispatch;
        let _id = tmpProps._id;
        let _idChild = tmpProps._idChild;
        dispatch(delCard(_id, _idChild));
    }
    render() {
        let that = this;
        let props = this.props;
        let isActive = false;
        let active = props.active;
        if (active._id >= 0 && active._id ===  props._id) {
            if (active._idChild >= 0) {
                // has _idChild
                if (props._idChild === active._idChild) {
                    isActive = true;
                }
            }else {
                // not have _idChild
                isActive = true;
            }
        }
        let activeClaName = classnames({
            groupwraper: GROUPTYPES.indexOf(props.com.card_type) > -1,
            active: isActive
        });
        //console.log('componentWraper',this.props.com.card_type,this.props.component);
        let tmpProps = _.assignIn({},this.props, this.props.com);

        const { greedy, isOver, isOverCurrent, connectDropTarget, children } = this.props;
        const { hasDropped, hasDroppedOnChild } = this.state;
        let backgroundColor = 'rgba(0, 0, 0, .5)';
        if (isOverCurrent || isOver && greedy) {
            backgroundColor = 'red';
        }
        return connectDropTarget(
            <section  style={getStyle(backgroundColor)} onClick={this.clickHandler.bind(that)} onDoubleClick={this.clickHandler2.bind(that)} className="_namespace">
                <div className="del-btn" onClick={this.delHandler.bind(this)}>X</div>
                <div className={activeClaName}>
                    { React.createElement(this.props.component, tmpProps) }
                </div>
            </section>
        );
    }
}
//export default ComponentWrapper
export default DropTarget(ItemTypes.CARD, boxTarget, collect)(ComponentWrapper);