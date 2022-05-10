import { useNavigate } from 'react-router-dom'

import logo from '../../assets/logo_yard_sale.svg'
import Header from '../../components/Header'

const CreateNewPassPage = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/shop')
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
          <h2 className='RecoverPage__title'>Create a new password</h2>
          <p className='RecoverPage__text'>
            Enter a new password for your account
          </p>
        </div>
        <form className='RecoveryPage__form' onSubmit={handleSubmit}>
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
          <div className='InputContainer'>
            <label className='InputContainer__label' htmlFor='repassword'>
              Re-enter password
            </label>
            <input
              className='InputContainer__input'
              type='password'
              name='repassword'
              id='repassword'
            />
          </div>
          <input
            className='btn btn-primary RecoveryPage__button'
            type='submit'
            value='Confirm'
          />
        </form>
      </div>
    </div>
  )
}

export default CreateNewPassPage
