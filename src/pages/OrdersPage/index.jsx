import OrderItem from '../../components/OrderItem'
import './style.css'

const OrdersPage = () => {
  return (
    <div className='OrdersPage'>
      <h1 className='OrdersPage__title'>My Orders</h1>
      <div className='OrdersPage__list'>
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
    </div>
  )
}

export default OrdersPage
