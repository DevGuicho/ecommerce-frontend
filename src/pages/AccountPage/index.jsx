/* eslint-disable multiline-ternary */
import { Formik, Form, Field } from 'formik'

import SignupSchema from '../../utils/schemas/sigUpSchema'
import useUser from '../../hooks/useUser'
import './styles.css'
import { useNavigate } from 'react-router-dom'

const AccountPage = ({ isCreate }) => {
  const { login, name, email, password } = useUser()
  const navigate = useNavigate()

  const handleSubmit = (values) => {
    login(values)
    navigate('/')
  }

  return (
    <div className='Account'>
      <Formik
        initialValues={{
          name: name || '',
          email: email || '',
          password: password || ''
        }}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
        enableReinitialize
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className='Account__form'>
            <fieldset className='Account__inputs'>
              <h1 className='Account__title'>My Account</h1>
              <div className='InputContainer'>
                {errors.name && touched.name ? (
                  <span>{errors.name}</span>
                ) : null}
                <label className='InputContainer__label' htmlFor='name'>
                  Name
                </label>
                <Field
                  className='InputContainer__input'
                  type='text'
                  name='name'
                  id='name'
                />
              </div>
              <div className='InputContainer'>
                {errors.email && touched.email ? (
                  <span>{errors.email}</span>
                ) : null}
                <label className='InputContainer__label' htmlFor='email'>
                  Email address
                </label>
                <Field
                  className='InputContainer__input'
                  type='email'
                  name='email'
                  id='email'
                />
              </div>
              <div className='InputContainer'>
                {errors.password && touched.password ? (
                  <span>{errors.password}</span>
                ) : null}
                <label className='InputContainer__label' htmlFor='password'>
                  Password
                </label>
                <Field
                  className='InputContainer__input'
                  type='password'
                  name='password'
                  id='password'
                />
              </div>
            </fieldset>
            {isCreate ? (
              <button type='submit' className='btn btn-primary Account_button'>
                Create
              </button>
            ) : (
              <button
                type='submit'
                className='btn btn-primary Account_button'
                disabled={isSubmitting}
              >
                Save
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AccountPage
