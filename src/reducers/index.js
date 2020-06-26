import {combineReducers} from 'redux'
import autheduser from './authedusers'
import users from './users'
import tweets from './tweets'
import {loadingBarReducer} from  'react-redux-loading-bar'

export default combineReducers({
    autheduser,
    users,
    tweets,
    loadingBar: loadingBarReducer
})