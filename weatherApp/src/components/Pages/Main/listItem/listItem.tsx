import * as React from 'react'
import {ListGroupItem} from 'reactstrap'
import EmptyList from './EmptyList'
import LikeList from '../likeList/LikeList'
import Loader from '../../../Loader/Loader'
import {toggleLike} from '../../../../actions'
import {connect} from 'react-redux'

interface PropListItem {
  weatherData: Array<any>;
  toggleLike(id: string);
}

const ListItem: React.FC<PropListItem> = (props) => {

  const{weatherData, toggleLike} = props

  const onLike = (id) => {
    toggleLike(id)
  }

  return (
    <div>
      {weatherData.length != 0 ? <ListItemMarkup weatherData={weatherData} onLike={onLike}/> : <EmptyList/>}
    </div> 
  )
}

const ListItemMarkup = ({weatherData, onLike}): JSX.Element => {

  return weatherData.map((el) => {  
    if(!el.success && el.success !== undefined) return <ErrorListReq key={el.id}/>
      else {
        return (
          el.loaded ? 
          <ListGroupItem key={el.id}>
            <p>{el.location.name}</p>
            <img src={el.current.weather_icons} alt=""/>
            <p>{el.current.temperature}</p>
            <LikeList id={el.id} like={el.like} onLike={onLike}/>
          </ListGroupItem>  
          :
          <Loader key={el.id}/>
        )
      }
  })
}  

const mapDispatchToProps = {
  toggleLike  
}
    
const ErrorListReq = () => (
  <p>write a correct city</p>
)

export default connect(null, mapDispatchToProps)(ListItem)
