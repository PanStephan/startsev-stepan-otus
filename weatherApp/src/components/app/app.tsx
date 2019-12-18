import * as React from 'react'
import List from '../list/List'
import SearchForm from '../searchForm/SearchForm'

const App: React.FC = () => {
  return (
    <div className='container'>
      <SearchForm/>
      <List/>
    </div>  
  )
}

export default App
