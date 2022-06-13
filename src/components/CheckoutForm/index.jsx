/* eslint-disable multiline-ternary */
import { Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/logo_yard_sale.svg'
import useCart from '../../hooks/useCart'
import delay from '../../utils/delay'
import checkoutSchema from '../../utils/schemas/checkoutSchema'

const CheckoutForm = ({ setIsLoading, setIsOk }) => {
  const { payCart } = useCart()
  const navigate = useNavigate()
  const handleSubmit = async () => {
    payCart()
    setIsLoading(true)
    await delay(1000)
    setIsLoading(false)
    setIsOk(true)
    await delay(1000)
    navigate('/')
  }
  return (
    <Formik
      initialValues={{ card: '', name: '', expiration: '', security: '' }}
      onSubmit={handleSubmit}
      validationSchema={checkoutSchema}
    >
      {({ errors, touched }) => (
        <Form className='Login'>
          {/* {error && <p>{error}</p>} */}
          <figure className='Login__logo'>
            <img src={logo} alt='' width={206} height={43} />
          </figure>
          <fieldset className='Login__InputWrap'>
            <div className='InputContainer'>
              {errors.card && touched.card ? (
                <span className='InputContainer__error'>{errors.card}</span>
              ) : null}
              <label className='InputContainer__label' htmlFor='card'>
                Card Number
              </label>
              <Field
                className='InputContainer__input'
                type='text'
                name='card'
                id='card'
              />
            </div>
            <div className='InputContainer'>
              {errors.name && touched.name ? (
                <span className='InputContainer__error'>{errors.name}</span>
              ) : null}
              <label className='InputContainer__label' htmlFor='name'>
                Name on Card
              </label>
              <Field
                className='InputContainer__input'
                type='text'
                name='name'
                id='name'
              />
            </div>
            <div className='Checkout__container'>
              <div className='InputContainer'>
                {errors.expiration && touched.expiration ? (
                  <span className='InputContainer__error'>
                    {errors.expiration}
                  </span>
                ) : null}
                <label className='InputContainer__label' htmlFor='expiration'>
                  Expiration date
                </label>
                <Field
                  className='InputContainer__input'
                  type='text'
                  name='expiration'
                  id='expiration'
                />
              </div>
              <div className='InputContainer'>
                {errors.security && touched.security ? (
                  <span className='InputContainer__error'>
                    {errors.security}
                  </span>
                ) : null}
                <label className='InputContainer__label' htmlFor='security'>
                  Security Code
                </label>
                <Field
                  className='InputContainer__input'
                  type='password'
                  name='security'
                  id='security'
                />
              </div>
            </div>
          </fieldset>
          <button className='btn btn-primary Login__button'>
            <i /> Pay now
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default CheckoutForm
