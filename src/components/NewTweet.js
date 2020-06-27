import React,{Component} from 'react'
import {connect} from 'react-redux'
import {handleAddTweet} from '../actions/tweets'
import {Redirect} from 'react-router-dom'

class NewTweet extends Component{
    state = {
        text:'',
        toHome: false
    }

    handleChange = (e) => {
        const text = e.target.value
        
        this.setState(() => ({
            text
        }))
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const {text} = this.state
        const {dispatch,id} = this.props

        dispatch(handleAddTweet(text,id))

        this.setState(() => ({
         text:'',
         tohome: id ? false : true
        }))        
    }

    render(){
        const { text ,tohome} = this.state
        const tweetLeft = 200 - text.length

        if(tohome ===true){
            return <Redirect to='/' />
        }
  
        return(
            <div>
                <h3 className="center">Compose new tweet</h3>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <textarea 
                    placeholder="What's happening"
                    value = {text}
                    onChange={this.handleChange}
                    maxLength={200}
                    />
                    {
                        tweetLeft <= 100 &&(
                            <div className="tweet-length">
                                {tweetLeft}
                            </div>   
                        )
                    }
                    <button
                        className='btn'
                        onClick={this.handleSubmit}
                        disable ={text === ''}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(NewTweet)