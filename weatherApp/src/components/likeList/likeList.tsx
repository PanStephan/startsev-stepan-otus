import * as React from 'react'
import {Button} from 'reactstrap'

export default class LikeList extends React.Component<any> {


  render() {
    const{onLike, id, like} = this.props

    const classNameLike = like ? 'fa fa-heart fa-heart--active' : 'fa fa-heart'

    return ( 
      <Button onClick={() => {onLike(id)}}>
        <i className={classNameLike}></i>
      </Button>
    )
  }

}