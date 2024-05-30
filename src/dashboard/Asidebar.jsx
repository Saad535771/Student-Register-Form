// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

function Asidebar() {
  return (
     <div className='height-full asidebar fixed'>
      
          <ul className='aside-menu '>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/registeration">Registration</Link></li>
            <li><Link to="/status">Status</Link></li>
            <li><Link to="/subcategories">Subcategories</Link></li>
            <li><Link to="/catagory">Categories</Link></li>
          </ul>
    
    </div>
  )
}

export default Asidebar