import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>

     <ul style={{display:'flex', alignItems:'right', justifyContent:'right'}}>
        {/* <li><Link to="/">Layout</Link></li> */}
        <li style={{}}><Link to="">Home</Link></li>
        <li><Link to='/Products'>Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>

      </ul>
    </div>
  )
}

export default Header