import React, {Component, PropTypes} from 'react';

export default class PureInput extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props.field !== nextProps.field;
    }

    render() {
        const {field, ...rest} = this.props;
        //debugger;
        return <input className="form-control" {...field} {...rest}/>;
    }
}
PureInput.propTypes ={
    field: PropTypes.object.isRequired
}
