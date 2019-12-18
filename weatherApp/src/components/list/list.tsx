import * as React from 'react'
import { ListGroup} from 'reactstrap'
import {connect} from 'react-redux'
import ListItem from '../listItem/ListItem'


interface IPropList {
  weather: Array<any>  
}

const List: React.FC<IPropList> = (props) => {
  const {weather} = props

  return (
    <ListGroup>
      <ListItem weatherData={weather}/>
    </ListGroup>  
  )
}

const mapStateToProps = ({weather}) => {
  return {
    weather
  }
}

export default connect(mapStateToProps)(List)