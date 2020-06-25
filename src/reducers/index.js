import {combineReducers} from 'redux'
import autheduser from './authedusers'
import users from './users'
import tweets from './tweets'

export default combineReducers({
    autheduser,
    users,
    tweets
})