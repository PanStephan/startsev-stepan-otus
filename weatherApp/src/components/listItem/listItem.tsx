import * as React from 'react'
import {ListGroupItem } from 'reactstrap'
import LikeList from '../likeList/LikeList'

interface IPropListItem {
  weatherData: Array<any>
}


const ListItem: React.FC<IPropListItem> = (props) => {
  const{weatherData} = props
  if(weatherData.length != 0) {
    return weatherData.map((el) => {
      return (
        <ListGroupItem key={el.id}>
          <p>{el.res.data.location.name}</p>
          <img src={el.res.data.current.weather_icons} alt=""/>
          <p>{el.res.data.current.temperature}</p>
          {/* <LikeList id={el.id} like={el.like} onLike={onLike}/> */}
        </ListGroupItem>  
      )
    })
  } else return (
    <p>Pick your first city</p>
  )
}

export default ListItem
