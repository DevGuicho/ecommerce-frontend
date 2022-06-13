/* eslint-disable multiline-ternary */
import { Field, Form, Formik } from 'formik'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo_yard_sale.svg'
import Header from '../../components/Header'
import useUser from '../../hooks/useUser'
import loginSchema from '../../utils/schemas/loginSchema'

import './styles.css'

const LoginPage = () => {
  const { login, error } = useUser()

  const handleSubmit = (values) => {
    login(values)
  }

  return (
    <div className='container login-page'>
      <div className='Login__header container'>
        <Header />
      </div>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        {({ errors, touched }) => (
          <Form className='Login'>
            {error && <p>{error}</p>}
            <figure className='Login__logo'>
              <img src={logo} alt='' width={206} height={43} />
            </figure>
            <fieldset className='Login__InputWrap'>
              <div className='InputContainer'>
                {errors.email && touched.email ? (
                  <span className='InputContainer__error'>*{errors.email}</span>
                ) : null}
                <label className='InputContainer__label' htmlFor='email'>
                  Email
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
                  <span className='InputContainer__error'>
                    {errors.password}
                  </span>
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
            <input
              className='btn btn-primary Login__button'
              type='submit'
              value='Log In'
            />
          </Form>
        )}
      </Formik>
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
