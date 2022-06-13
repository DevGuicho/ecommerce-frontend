import { useEffect } from 'react'
import OrderItem from '../../components/OrderItem'
import useOrders from '../../hooks/useOrders'
import useUser from '../../hooks/useUser'
import './style.css'

const OrdersPage = () => {
  const { orders, getOrders } = useOrders()
  const { id } = useUser()

  useEffect(() => {
    if (id) getOrders()
  }, [id])
  return (
    <div className='OrdersPage'>
      <h1 className='OrdersPage__title'>My Orders</h1>
      <div className='OrdersPage__list'>
        {orders.map((order) => (
          <OrderItem key={order.id} {...order} />
        ))}
      </div>
    </div>
  )
}

export default OrdersPage
