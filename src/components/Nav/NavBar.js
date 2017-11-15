import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return(
<div className="Nav">
  <ul>
    <li><a href="/search">Search</a></li>
    <li><a href="/">Home</a></li>
  </ul>
</div>
  )
}
export default NavBar;
