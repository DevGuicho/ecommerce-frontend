import { Link } from 'react-router-dom'

import './styles.css'

const OrderItem = () => {
  return (
    <div className='OrderItem'>
      <div className='OrderItem__description'>
        <span className='OrderItem__date'>04.25.2020</span>
        <span className='OrderItem__articles'>6 articulos</span>
      </div>
      <Link className='OrderItem__link' to=':fdasfsd'>
        <span className='OrderItem__total'>$120.00</span>
        <i className='OrderItem__icon' />
      </Link>
    </div>
  )
}

export default OrderItem
