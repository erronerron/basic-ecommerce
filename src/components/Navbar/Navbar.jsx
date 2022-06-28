import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

function Navbar() {
  return (
    <nav>
      <div className={style.navItems}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/product/add'>Add Product</NavLink>
      </div>
      <div>
        <NavLink to='/cart'>Cart</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
