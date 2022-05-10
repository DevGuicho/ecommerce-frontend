import { Link } from 'react-router-dom'

import iconMenu from '../../assets/icon_menu.svg'
import logo from '../../assets/logo_yard_sale.svg'
import iconCart from '../../assets/cart.svg'
import Navbar from '../Navbar'
import './styles.css'

const Header = () => {
  return (
    <>
      <header className='Header'>
        <Link className='Header__btnMenu' to='/menu'>
          <img src={iconMenu} alt='' width={25} height={19} />
        </Link>
        <Link to='/shop'>
          <img
            className='Header__logo'
            src={logo}
            alt=''
            width={96}
            height={20}
          />
        </Link>
        <div className='Header__navbar'>
          <Navbar />
        </div>
        <div className='Header__user'>
          <Link className='Header__userLogin' to='/auth/login'>
            Sign In
          </Link>
          <Link to='/cart'>
            <img src={iconCart} alt='' width={20} height={21} />
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header
