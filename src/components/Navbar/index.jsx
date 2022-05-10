import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <ol className='Navbar__list'>
        <li className='Navbar__item'>
          <Link to='/' className='Navbar__link active'>
            All
          </Link>
        </li>
        <li className='Navbar__item'>
          <Link to='/' className='Navbar__link'>
            Clothes
          </Link>
        </li>
        <li className='Navbar__item'>
          <Link to='/' className='Navbar__link'>
            Electronics
          </Link>
        </li>
        <li className='Navbar__item'>
          <Link to='/' className='Navbar__link'>
            Furniture
          </Link>
        </li>
        <li className='Navbar__item'>
          <Link to='/' className='Navbar__link'>
            Toys
          </Link>
        </li>
        <li className='Navbar__item'>
          <Link to='/' className='Navbar__link'>
            Others
          </Link>
        </li>
      </ol>
    </nav>
  )
}

export default Navbar
