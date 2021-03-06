import React from 'react'
import { useNavigate } from 'react-router-dom'
import useCart from '../../hooks/useCart'
import currencyFormat from '../../utils/currencyFormat'

import CartItem from '../CartItem'
import './styles.css'

const Cart = () => {
  const navigate = useNavigate()

  const { productsCart, total } = useCart()

  const handleClick = () => {
    navigate('/checkout')
  }

  return (
    <div className='Cart container'>
      <div className='Cart__header'>
        <button className='Cart__buttonBack' onClick={() => navigate(-1)}>
          <i />
        </button>
        <h2 className='Cart__title'>Shopping cart</h2>
        <div className='Cart__right' />
      </div>
      <div className='Cart__list'>
        {productsCart.map((product) => (
          <CartItem key={product.id} {...product} />
        ))}
      </div>
      <div className='Cart__summary'>
        <span className='Cart__total'>Total</span>
        <span className='Cart__totalPrice'>{currencyFormat(total)}</span>
      </div>
      <button
        type='button'
        className='Cart__button btn btn-primary'
        onClick={handleClick}
        disabled={productsCart.length === 0}
      >
        Checkout
      </button>
    </div>
  )
}

export default Cart
