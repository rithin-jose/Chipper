import {getInitialData} from '../utils/api'
import {receiveUsers} from './users'
import {receiveTweets} from './tweets'
import {setAuthedUser} from './autheduser'

const AUTHED_ID = 'tylermcginnis'

export functions handleInitialData(){
    return (dispatch) => {
        return getInitialData()
            .then(({users, tweets}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveTweets(tweets))
                dispatch(receiveTweets(AUTHED_ID))
            })
    }
}