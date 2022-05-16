import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useCart from '../../hooks/useCart'
import currencyFormat from '../../utils/currencyFormat'

import './style.css'

const Product = ({ id, name, price, imgUrl }) => {
  const [isOnCart, setIsOnCart] = useState(false)
  const location = useLocation()
  const { addProductToCart, productsCart } = useCart()

  const handleClick = () => {
    addProductToCart({ product: { id, name, price, imgUrl } })
  }

  useEffect(() => {
    setIsOnCart(productsCart.some((product) => product.id === id) > 0)
  }, [productsCart])

  return (
    <div className='Product'>
      <Link
        to={`/shop/product/${id}`}
        className='Product__image'
        state={{ backgroundLocation: location }}
      >
        <img src={imgUrl} alt='' width={163} height={163} />
      </Link>
      <div className='Product__caption'>
        <div className='Product__description'>
          <span>{currencyFormat(price)}</span>
          <p>{name}</p>
        </div>
        <button
          className={`Product__button ${isOnCart ? 'onCart' : ''}`}
          onClick={handleClick}
        >
          <i />
        </button>
      </div>
    </div>
  )
}

export default Product
