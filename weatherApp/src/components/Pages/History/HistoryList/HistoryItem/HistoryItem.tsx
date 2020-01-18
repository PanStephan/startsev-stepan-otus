import * as React from 'react'
import {connect} from 'react-redux'

interface PropHistoryItem {
  weather: Array<any>;
  itemId: string;
}

const HistoryItem: React.FC<PropHistoryItem> = ({weather, itemId}) => {
  const item = weather.filter(el => el.id === itemId)

  return (
    <>
      {item.length === 0 ? <p>Write a first city</p> :
        item.map(el => {
          return (
            <div key={el.id}>
              <div>
                {el.location.name}
                {el.location.country}
                {el.location.region}
              </div> 
              <div> 
                {el.current.observation_time}
                {el.current.temperature}
              </div>
            </div>
          )       
        })
      }
    </>  
  )
}

const mapStateToProps = ({itemId}) => {
  return {
    itemId
  }
}

export default connect(mapStateToProps)(HistoryItem)