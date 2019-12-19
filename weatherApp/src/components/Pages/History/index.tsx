import * as React from 'react'
import { ListGroup, ListGroupItem} from 'reactstrap'
import {connect} from 'react-redux'


interface PropList {
  weather: Array<any>;  
}

const History: React.FC<PropList> = (props) => {
  const {weather} = props

  return (
    <ListGroup>
      {weather.length === 0 ? <p>Write a first city</p> :
        weather.map(el => {
          return (
            <ListGroupItem key={el.id}>
              {el.location.name}
            </ListGroupItem> 
          )       
        })
      }
    </ListGroup>  
  )
}

const mapStateToProps = ({weather}) => {
  return {
    weather
  }
}

export default connect(mapStateToProps)(History)
