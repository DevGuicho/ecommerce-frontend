import { Link } from 'react-router-dom'
import currencyFormat from '../../utils/currencyFormat'

import './styles.css'

const OrderItem = ({ fecha, totalProductos, totalPago, id }) => {
  return (
    <div className='OrderItem'>
      <div className='OrderItem__description'>
        <span className='OrderItem__date'>{fecha}</span>
        <span className='OrderItem__articles'>{totalProductos} articulos</span>
      </div>
      <Link className='OrderItem__link' to={`${id}`}>
        <span className='OrderItem__total'>{currencyFormat(totalPago)}</span>
        <i className='OrderItem__icon' />
      </Link>
    </div>
  )
}

export default OrderItem
