/* eslint-disable multiline-ternary */
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import iconMenu from '../../assets/icon_menu.svg'
import logo from '../../assets/logo_yard_sale.svg'
import iconCart from '../../assets/cart.svg'
import Navbar from '../Navbar'
import './styles.css'
import useUser from '../../hooks/useUser'

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { isAuth, email } = useUser()
  const { logout } = useUser()

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
          {isAuth ? (
            <div className='Header__userOptions'>
              <button
                type='button'
                className='Header__userEmail'
                onClick={() => setIsVisible(!isVisible)}
              >
                {email}
                <i />
              </button>
              {isVisible && (
                <ol className='Header__userButtons'>
                  <li>
                    <button
                      className='Header__userButton'
                      onClick={() => {
                        setIsVisible(false)
                        navigate('/orders')
                      }}
                    >
                      My Orders
                    </button>
                  </li>
                  <li>
                    <button
                      className='Header__userButton'
                      onClick={() => {
                        setIsVisible(false)
                        navigate('/account')
                      }}
                    >
                      My Account
                    </button>
                  </li>
                  <li>
                    <button
                      className='Header__userButton--login'
                      onClick={logout}
                    >
                      Sign Out
                    </button>
                  </li>
                </ol>
              )}
            </div>
          ) : (
            <Link className='Header__userLogin' to='/auth/login'>
              Sign In
            </Link>
          )}
          <Link to='/cart' state={{ backgroundLocation: location }}>
            <img src={iconCart} alt='' width={20} height={21} />
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header
