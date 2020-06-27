import {saveLikeToggle,saveTweet} from '../utils/api'
import {showLoading,hideLoading} from 'react-redux-loading-bar'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOOGLE_TWEET'
export const ADD_TWEET = 'ADD_TWEET'

export function receiveTweets(tweets){
    return{
        type: RECEIVE_TWEETS,
        tweets,
    }
}

export function toggleTweet({id,autheduser,hasLiked}){
    return{
        type: TOGGLE_TWEET,
        id,
        autheduser,
        hasLiked,
    }
}

export function addTweet(tweet){
    return{
        type: ADD_TWEET,
        tweet,
    }
}

export function handleAddTweet(text,replyingTo){
    return (dispatch,getState) => {
        const {autheduser} = getState()
        dispatch(showLoading())
        return saveTweet({
            text,
            author: autheduser,
            replyingTo
        })
        .then((tweet) => dispatch(addTweet(tweet)))
        .then(() => dispatch(hideLoading()))
    }
}

export function handleToggleTweet(info){
    return (dispatch) => {
        dispatch(toggleTweet(info))

        return saveLikeToggle(info)
            .catch((e)=>{
                console.warn("Error occured",e)
                dispatch(toggleTweet(info))
                alert('there was an error')
            })

    }
}