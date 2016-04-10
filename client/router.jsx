import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { hashHistory, browserHistory } from 'react-router'
import EditorApp from './components/editor/index.jsx'
import EditorList from './components/editor-list/EditorList.jsx'

const routes = (
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={EditorApp}/>
        </Route>
        <Route path="/editor" component={EditorApp}></Route>
        <Route path="/list" component={EditorList}></Route>
    </Router>
)

export default routes
