/* eslint-disable multiline-ternary */
import { useState } from 'react'

import './styles.css'

const initialState = {
  name: 'Camila Yoko',
  email: 'camilayokoo@gmail.com'
}

const AccountPage = ({ isCreate }) => {
  const [form, setForm] = useState(initialState)
  const [isDisabled, setIsDisabled] = useState(true)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isDisabled) {
      setIsDisabled(false)
    }
  }

  return (
    <div className='Account'>
      <form className='Account__form' onSubmit={handleSubmit}>
        <fieldset className='Account__inputs'>
          <h1 className='Account__title'>My Account</h1>
          <div className='InputContainer'>
            <label className='InputContainer__label' htmlFor='name'>
              Name
            </label>
            <input
              onChange={handleChange}
              className='InputContainer__input'
              type='text'
              name='name'
              id='name'
              value={form.name}
              disabled={isDisabled}
            />
          </div>
          <div className='InputContainer'>
            <label className='InputContainer__label' htmlFor='email'>
              Email address
            </label>
            <input
              className='InputContainer__input'
              onChange={handleChange}
              type='email'
              name='email'
              id='email'
              value={form.email}
              disabled={isDisabled}
            />
          </div>
        </fieldset>
        {isCreate ? (
          <button className='btn btn-primary Account_button'>Create</button>
        ) : isDisabled ? (
          <button className='btn btn-secondary Account_button'>Edit</button>
        ) : (
          <button className='btn btn-primary Account_button'>Save</button>
        )}
      </form>
    </div>
  )
}

export default AccountPage
