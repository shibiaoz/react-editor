import React from 'react';
import './index.scss'
export default class EditorFooter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="_namespace">
                Copyright © 2015~2016   贴吧企业商业化基础技术团队   .All rights reserved.
            </div>
        );
    }
}