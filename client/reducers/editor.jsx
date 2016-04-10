import {combineReducers}  from 'redux'
import {reducer as formReducer} from 'redux-form'
import getCards from './editor-cards.jsx'
import getActiveCards from './active-component.jsx'
import pageInfo from './page-info.jsx'
const toeditApp = combineReducers({
    cards: getCards,
    active: getActiveCards,
    form: formReducer,
    pageInfo: pageInfo,
});
export default toeditApp