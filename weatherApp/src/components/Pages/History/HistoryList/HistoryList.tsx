import * as React from 'react'
import { ListGroup, ListGroupItem} from 'reactstrap'
import {withRouter} from 'react-router-dom'
import ErrorListReq from '../../../ErrorListReq/ErrorListReq'
import {getSeparateItem} from '../../../../actions'
import {connect} from 'react-redux'

interface PropHistoryList {
  weather: Array<any>;
  history: Array<string>;
  getSeparateItem(id: string): void;
}

const HistoryList: React.FC<PropHistoryList> = ({weather, history, getSeparateItem}) => {

  const onClick = (id) => {
    history.push(id)
    getSeparateItem(id)
  }

  const localStorageData = JSON.parse(localStorage.getItem('city'))

 return (
   <>
    <ListGroup>
      {weather.length === 0 ? <p>Write a first city</p> :
        <>
          <span>you watching now</span>
            {weather.map(el => {
              if(!el.success && el.success !== undefined) return <ErrorListReq key={el.id}/>
              return (
                <ListGroupItem key={el.id} onClick={onClick.bind(this, el.id)}>
                  {el.location.name}
                </ListGroupItem> 
              )       
            })}
        </>  
      }
    </ListGroup>  
    <ListGroup>
      {
        localStorageData ? 
          <>
            <span>you watched</span>
            {localStorageData.map((el, index) => {
              return (
                <div key={index}>{el}</div>
              )
            })}
          </> :   
          null
        }
    </ListGroup>  
  </>  
 )
}

const mapDispatchToProps = {
  getSeparateItem
}

export default connect(null, mapDispatchToProps)(withRouter(HistoryList))