import { Link } from 'react-router-dom'
import logo from '../../assets/logo_yard_sale.svg'
import Header from '../../components/Header'

import './styles.css'

const LoginPage = () => {
  return (
    <div className='container login-page'>
      <div className='Login__header container'>
        <Header />
      </div>
      <form className='Login'>
        <figure className='Login__logo'>
          <img src={logo} alt='' width={206} height={43} />
        </figure>
        <fieldset className='Login__InputWrap'>
          <div className='InputContainer'>
            <label className='InputContainer__label' htmlFor='email'>
              Email
            </label>
            <input
              className='InputContainer__input'
              type='email'
              name='email'
              id='email'
            />
          </div>
          <div className='InputContainer'>
            <label className='InputContainer__label' htmlFor='password'>
              Password
            </label>
            <input
              className='InputContainer__input'
              type='password'
              name='password'
              id='password'
            />
          </div>
        </fieldset>
        <input
          className='btn btn-primary Login__button'
          type='submit'
          value='Log In'
        />
      </form>
      <Link to='/auth/recovery-pass' className='Login__link'>
        Forgot my password
      </Link>
      <Link to='/account/create' className='btn btn-secondary Login__signup'>
        Sign Up
      </Link>
    </div>
  )
}

export default LoginPage
