import * as React from 'react';

import List from '../list/list'
import {weatherInfo} from '../../services/getInfo'
import SearchForm from '../searchForm/searchForm'

export default class App extends React.Component<any> {

  state = {
    value: '',
    data: [],
  }

  onChange = (e) => {
    this.setState({value: e.target.value})
  }

  onLike = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex((el)=> el.id === id)
      const old = data[index]
      let newItem;
      newItem = {...old, like: !old.like}
      const newArr = [...data.slice(0, index), newItem,...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }

  generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,(c,r)=>('x'==c?(r=Math.random()*16|0):(r&0x3|0x8)).toString(16))
  }

  onSubmit = (e) => {
    e.preventDefault()
    weatherInfo(this.state.value)
      .then(res => {
        this.setState(({data}) => {
            const item = {
              res: res,
              like: false,
              id: this.generateUUID()
            }
            const newArr = [...data ,item]
            return {
              data: newArr
            } 
        })
      })
  }

  render() {
    return (
      <div className='container'>
        <SearchForm onChange={this.onChange} onSubmit={this.onSubmit} value={this.state.value}/>
        <List data={this.state.data} onLike={this.onLike}/>
      </div>  
    )
  }
}

