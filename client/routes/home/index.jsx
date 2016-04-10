import React from 'react';
import { Layout, Sidebar, Section } from 'fit-layout-global';
import Myapp from '../../components/myapp/index.jsx';
import Reducers from '../../reducers/index.jsx'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Listitems from '../../components/list/index.jsx';
let store = createStore(Reducers, window.devToolsExtension ? window.devToolsExtension() : undefined);
export default class Home extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Myapp/>
            </Provider>
        )
    }
}
