import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import './styles.scss'
import App from './components/app/App'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>  
  </Provider>,
  document.getElementById('app')
)