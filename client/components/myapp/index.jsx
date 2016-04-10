import React from 'react';
import ListItem from '../../containers/list/index.jsx';
export default class Myapp extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <ListItem/>
            </div>
        )
    }
}
