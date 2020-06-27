import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {handleInitialData} from  '../actions/shared'
import Dashboard from './dashboard'
import LoadingBar from 'react-redux-loading-bar'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar/>
          <div className='container'>
            <Nav/>
            {this.props.loading === true 
            ? null
            : <div>
                <Route path='/' exact component={Dashboard}/>
                <Route path='/tweet/:id' component={TweetPage}/>
                <Route path='/new' component={NewTweet}/>
              </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({autheduser}){
  return{
    loading: autheduser === null
  }
}

export default connect(mapStateToProps)(App)