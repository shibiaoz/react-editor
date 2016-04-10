import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import request from 'superagent'
import _ from 'lodash'
// custome component
//import EditorHeader from '../editor-header/index.jsx'
import ContainerEditorHeader from '../../containers/editor-header/index.jsx'
import EditorFooter from '../editor-footer/index.jsx'
import toeditApp from '../../reducers/editor.jsx'
import EditorContent from '../editor-content/index.jsx'
import { DragSource, DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import {setEditPageCards,setPageInfo, setDefault, setPageFormActive} from '../../actions/index.jsx'
import {pageInfo} from '../../config/pageJson.jsx'

let store = createStore(toeditApp,  window.devToolsExtension ? window.devToolsExtension() : undefined);
class EditorApp extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let query = this.props.location.query;
        let pageId = query && query.pageId;
        if (pageId) {
            request
                .get('/blitz/get')
                .query({
                    pageId: pageId
                })
                .end(function(err, res){
                    if(err) {
                        alert('get page failed by id =>' + query.pageId);
                    }
                    else if (true || res.body &&  res.body.no === 0) {
                        // to get cards and

                        let data = res.body.data;
                        let cards = data.cards;
                        let pageData = _.assignIn({}, pageInfo, data);
                        delete pageData.cards;
                        store.dispatch(setEditPageCards(cards.slice(0)));
                        store.dispatch(setPageFormActive(-1, pageData));
                        store.dispatch(setPageInfo(pageData))
                    }
                });
        }
        else {
            // 新建， hack的做法，稍后修改下,
            //debugger;
            let defaultData = store.getState();
            let cards = defaultData && defaultData.cards;
            if (cards && cards.length > 0) {
                store.dispatch(setDefault())
            }

        }

    }
    render() {
        console.log('route','edit');
       return (
           <Provider store={store}>
               <div key={this.props.location.query.pageId}>
                   <ContainerEditorHeader/>
                   <EditorContent/>
                   <EditorFooter/>
               </div>
           </Provider>

       );
    }
}

export default DragDropContext(HTML5Backend)(EditorApp);
/**
 * Provider 下是单个节点 expected a single ReactElement
 */