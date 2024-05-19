import React from 'react'
import '../static/css/NavLink.css'

function NavLink({href,title}) {
  return (
    // <a href={href}>{title}</a>
    <a href={href} className='navlink-link'>{title}</a>
  )
}

export default NavLink