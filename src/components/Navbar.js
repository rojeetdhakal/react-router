import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
         <nav>
            <NavLink to='/'> Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/Product'>Product</NavLink>
            <NavLink to='/user'>User</NavLink>
        </nav> 
</div>
  )
}

export default Navbar
