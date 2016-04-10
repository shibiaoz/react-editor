import React from 'react'
import _ from 'lodash'
import './index.scss'
import classnames from 'classnames'
import ComponentsMap from '../../config/componentsMap.jsx'
import ComponentWrapper from '../component-wrapper/index.jsx'
export default class GroupWrapper extends React.Component {
    constructor(props) {
        super(props)
    }
    getOneComponent(com, i) {

        let that = this;
        let _id = this.props._id;
        try {
            if(typeof com == 'string') {
                com = JSON.parse(com);
            }
            var props = _.assignIn({}, com);
            let component = ComponentsMap[com.card_type];
            //debugger;
            if (component) {
                return React.createElement(
                    ComponentWrapper,
                    {
                        key:i,
                        _id:_id,
                        _idChild:i,
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
