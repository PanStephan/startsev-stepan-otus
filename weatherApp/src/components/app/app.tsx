import * as React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Header from '../Header/Header'
import Main from '../Pages/Main'
import History from '../Pages/History'
import NotFound from '../NotFound/NotFound'

const App: React.FC = () => {
  return (
    <div className='container'>
      <Header/>
      <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/history/' component={History}/>
        <Route path='/404' component={() => <NotFound></NotFound>} />
        <Redirect from='*' to='/404' />
      </Switch>
    </div>  
  )
}

export default App
