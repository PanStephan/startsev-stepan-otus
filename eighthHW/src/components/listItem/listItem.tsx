import * as React from 'react'
import {ListGroupItem } from 'reactstrap';
import LikeList from '../likeList/likeList'

export default class ListItem extends React.Component<any> {

  render() {
    const {data, onLike} = this.props

    if(data.length != 0) {
      return data.map((el) => {
        return (
          <ListGroupItem key={el.id}>
            <p>{el.res.data.location.name}</p>
            <img src={el.res.data.current.weather_icons} alt=""/>
            <p>{el.res.data.current.temperature}</p>
            <LikeList id={el.id} like={el.like} onLike={onLike}/>
          </ListGroupItem>  
        )
      })
    } else return (
      <p>Pick your first city</p>
    )
  }
}
