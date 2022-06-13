import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import CartItem from '../../components/CartItem'
import useOrders from '../../hooks/useOrders'
import currencyFormat from '../../utils/currencyFormat'
import './styles.css'

const OrderDetailPage = () => {
  const { order, getOrder } = useOrders()
  const { id } = useParams()

  useEffect(() => {
    getOrder(Number(id))
  }, [id])

  return (
    <div className='OrderDetailPage'>
      <h1 className='OrderDetailPage__title'>My Order</h1>
      <div className='OrderDetailPage__summary'>
        <div className='OrderDetailPage__detail'>
          <span className='OrderDetailPage__date'>{order?.fecha || ''}</span>
          <span className='OrderDetailPage__articles'>
            {order?.totalProductos || 0} articulos
          </span>
        </div>
        <span className='OrderDetailPage__price'>
          {currencyFormat(order?.totalPago || 0)}
        </span>
      </div>
      <div className='OrderDetailPage__list'>
        {order &&
          order?.products.map((item) => (
            <CartItem key={item.id} {...item} disabled />
          ))}
      </div>
    </div>
  )
}

export default OrderDetailPage
