import {saveLikeToggle} from '../utils/api'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOOGLE_TWEET'

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