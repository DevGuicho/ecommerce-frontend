import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo_yard_sale.svg'
import envelope from '../../assets/noun_envelope.svg'
import Header from '../../components/Header'

const RecoveryPageInstructions = () => {
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
        <div className='RecoveryPage__form'>
          <figure className='RecoveryPage__envelope'>
            <img src={envelope} alt='' width={90} height={57} />
          </figure>
          <Link
            to='/auth/login'
            className='btn btn-primary RecoveryPage__button'
          >
            Login
          </Link>
          <span>
            Didn't received the email ?{' '}
            <Link className='RecoveryPage__link' to='/auth/login'>
              Resend
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default RecoveryPageInstructions
