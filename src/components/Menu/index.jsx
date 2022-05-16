/* eslint-disable multiline-ternary */
import { Link, useNavigate } from 'react-router-dom'
import useUser from '../../hooks/useUser'

import './styles.css'

const Menu = () => {
  const navigate = useNavigate()
  const { email, isAuth, logout } = useUser()
  return (
    <div className='Menu__contenido'>
      <div className='Modal__header'>
        <button className='Modal__button' onClick={() => navigate(-1)}>
          <i />
        </button>
      </div>
      <div className='Menu container'>
        <div className='Categories'>
          <h2 className='Categories__title'>Categories</h2>
          <nav className='Menu'>
            <ol className='Menu__list'>
              <li className='Menu__item'>
                <Link to='/' className='Menu__link active'>
                  All
                </Link>
              </li>
              <li className='Menu__item'>
                <Link to='/' className='Menu__link'>
                  Clothes
                </Link>
              </li>
              <li className='Menu__item'>
                <Link to='/' className='Menu__link'>
                  Electronics
                </Link>
              </li>
              <li className='Menu__item'>
                <Link to='/' className='Menu__link'>
                  Furniture
                </Link>
              </li>
              <li className='Menu__item'>
                <Link to='/' className='Menu__link'>
                  Toys
                </Link>
              </li>
              <li className='Menu__item'>
                <Link to='/' className='Menu__link'>
                  Others
                </Link>
              </li>
            </ol>
          </nav>
        </div>
        {isAuth ? (
          <div>
            <ol className='Menu__list'>
              <li className='Menu__item'>
                <Link to='/orders' className='Menu__link'>
                  My Orders
                </Link>
              </li>
              <li className='Menu__item'>
                <Link to='/account' className='Menu__link'>
                  My account
                </Link>
              </li>
            </ol>
          </div>
        ) : (
          <div />
        )}
        <div className='Menu__user'>
          {isAuth ? (
            <>
              <span>{email}</span>
              <button
                onClick={() => {
                  logout()
                  navigate(-1)
                }}
              >
                Sign out
              </button>
            </>
          ) : (
            <button onClick={() => navigate('/auth/login')}>LogIn</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Menu
