import {SET_AUTH_USER} from '../actions/autheduser'

export default function autheduser(state=null,action){
    switch(action.type){
        case SET_AUTH_USER:
            return action.id
        default:
            return state
    }
}