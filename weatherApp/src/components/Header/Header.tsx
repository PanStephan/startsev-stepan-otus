import * as React from 'react'
import {Nav, NavItem, Col} from 'reactstrap'
import {NavLink} from 'react-router-dom'

const Header = () => (
  <Nav>
    <NavItem>
      <Col xs="3"><NavLink to='/'>Main</NavLink></Col>
    </NavItem>
    <NavItem>
      <Col xs="3"><NavLink to='/history/'>History</NavLink></Col>
    </NavItem>
  </Nav>
)

export default Header
