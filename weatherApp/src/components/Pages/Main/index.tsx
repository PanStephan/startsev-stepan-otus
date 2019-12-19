import * as React from 'react'
import List from './list/List'
import SearchForm from './SearchForm/searchForm'

const Main: React.FC = () => (
  <>
    <SearchForm/> 
    <List/>
  </>
)

export default Main