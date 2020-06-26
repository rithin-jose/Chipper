import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {formatTweet,formatDate} from  '../utils/helpers'
import TiArrowBackOutline from 'react-icons'
import TiHeartOutline from 'react-icons'
import TiHeartFullOutline from 'react-icons'

class Tweet extends Component{
    render(){
        const handleLike = (e) => {
            e.preventDefault()
            //todo: handle like
        }
        const toParent = (e,id) => {
            e.preventDefault()
            //todo: redirect to parent tweet
        }
        const {tweet} = this.props

        if(tweet === null){
            return <p>This tweet dosen't exist</p>
        }
        const{
            name, avatar,timestamp,text,hasLiked,likes,replies,id,parent
        } = tweet

        return(
            <div className="tweet">
                <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
                <div className="tweet-info">
                    <span>{name}</span>
                    <div>
                        {formatDate(timestamp)}
                    </div>
                    {parent && (
                        <button className='replying-to' onClick={(e) => this.parent(e,parent.id)}>
                            replying to @ {parent}
                        </button>
                    )}
                    <p>{text}</p>
                </div>
                <div className="tweet-icons">
                    <TiArrowBackOutline className="tweet-icon"/>
                    <span>{replies !== 0 && replies}</span>
                    <button className="heart-button" onClick={this.handleLike}>
                        <TiHeartOutline/>
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({autheduser,users,tweets},{id}){
    const tweet= tweets[id]
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null

    return{
        autheduser,

        tweet: tweet ? formatTweet(tweet,users[tweet.author],autheduser,parentTweet) :null
    }
}

export default connect(mapStateToProps)(Tweet)