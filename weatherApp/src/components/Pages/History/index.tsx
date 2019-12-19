import * as React from 'react'
import {connect} from 'react-redux'
import HistoryList from './HistoryList/HistoryList'
import HistoryItem from './HistoryList/HistoryItem/HistoryItem'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

interface PropList {
  weather: Array<any>
}

const History: React.FC<PropList> = (props) => {
  const {weather} = props

  return (
    <Router>
      <Switch>
        <Route path='/history/' exact component={() => {
          return <HistoryList weather={weather}/>
        }}/>
        <Route path='/history/:id' exact render = {
          () => { 
            return <HistoryItem weather={weather}/>
          }
        }/>
      </Switch>
    </Router>  
  )
}

const mapStateToProps = ({weather, itemId}) => {
  return {
    weather
  }
}

export default connect(mapStateToProps)(History)
