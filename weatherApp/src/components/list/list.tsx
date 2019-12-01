import * as React from 'react'
import { ListGroup} from 'reactstrap';

import ListItem from '../listItem/listItem'


export default class List extends React.Component<any> {

  render() {
    const {data, onLike} = this.props
    return (
      <ListGroup>
        <ListItem data={data} onLike={onLike}/>
      </ListGroup>  
    )
  }

}