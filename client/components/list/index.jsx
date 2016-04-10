import React from 'react';
export default class Listitems  extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props);
        let that = this;
        return (
            <div>
                {
                    this.props.list2.map(function (item, i) {
                        return (<div onClick={ e => {console.log('---');that.props.onClick();}} key={i}>{item}</div>)
                    })
                }
            </div>
        )
    }
}
