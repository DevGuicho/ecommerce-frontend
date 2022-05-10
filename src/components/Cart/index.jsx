import React from 'react'
import { useNavigate } from 'react-router-dom'

import CartItem from '../CartItem'
import './styles.css'

const Cart = () => {
  const navigate = useNavigate()

  return (
    <div className='Cart'>
      <div className='Cart__header'>
        <button className='Cart__buttonBack' onClick={() => navigate(-1)}>
          <i />
        </button>
        <h2 className='Cart__title'>Shopping cart</h2>
        <div className='Cart__right' />
      </div>
      <div className='Cart__list'>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className='Cart__summary'>
        <span className='Cart__total'>Total</span>
        <span className='Cart__totalPrice'>$560</span>
      </div>
      <button className='Cart__button btn btn-primary'>Checkout</button>
    </div>
  )
}

export default Cart
