import React, {Component} from 'react'
import './index.scss'
const styleObj = {
  height:50,
  width:'100%',
  backgroundColor:'#31708F',
  color: '#fff',
  //display: 'flex',
  alignItems: 'center',
  //textAlign: 'center',
  fontSize: 30,
  paddingLeft: 20
}
export default class EditorCommonHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={styleObj}>
                {
                    this.props.children
                }
            </div>
        );
    }
}
