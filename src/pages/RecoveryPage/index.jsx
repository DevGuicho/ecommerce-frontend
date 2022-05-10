import { Link, useNavigate } from 'react-router-dom'

import logo from '../../assets/logo_yard_sale.svg'
import Header from '../../components/Header'
import './styles.css'

const RecoveryPage = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/auth/recovery-instructions')
  }

  return (
    <div className='container RecoveryPage'>
      <div className='Login__header container'>
        <Header />
      </div>
      <figure className='RecoveryPage__logo'>
        <img src={logo} alt='' width={148} height={31} />
      </figure>
      <div className='RecoveryPage__wrapper'>
        <div>
          <h2 className='RecoverPage__title'>Password recovery</h2>
          <p className='RecoverPage__text'>
            Inform the email address used to create your account
          </p>
        </div>
        <form className='RecoveryPage__form' onSubmit={handleSubmit}>
          <div className='InputContainer'>
            <label className='InputContainer__label' htmlFor='email'>
              Email address
            </label>
            <input
              className='InputContainer__input'
              type='email'
              name='email'
              id='email'
            />
          </div>
          <input
            className='btn btn-primary RecoveryPage__button'
            type='submit'
            value='Submit'
          />
          <Link className='RecoveryPage__link' to='/auth/login'>
            Back to Login
          </Link>
        </form>
      </div>
    </div>
  )
}

export default RecoveryPage
