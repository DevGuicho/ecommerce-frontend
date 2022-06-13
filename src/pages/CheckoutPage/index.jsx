import { useState } from 'react'
import CheckoutForm from '../../components/CheckoutForm'
import Header from '../../components/Header'

import './style.css'

const CheckoutPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isOk, setIsOk] = useState(false)

  return (
    <div className='container login-page'>
      <div className='Login__header container'>
        <Header />
      </div>
      {isLoading && <p>loading</p>}
      {isOk && <p>payed</p>}
      {!isOk && !isLoading && (
        <CheckoutForm setIsLoading={setIsLoading} setIsOk={setIsOk} />
      )}
    </div>
  )
}

export default CheckoutPage
