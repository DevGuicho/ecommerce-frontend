import CartItem from '../../components/CartItem'
import './styles.css'

const OrderDetailPage = () => {
  return (
    <div className='OrderDetailPage'>
      <h1 className='OrderDetailPage__title'>My Order</h1>
      <div className='OrderDetailPage__summary'>
        <div className='OrderDetailPage__detail'>
          <span className='OrderDetailPage__date'>04.25.2020</span>
          <span className='OrderDetailPage__articles'>6 articulos</span>
        </div>
        <span className='OrderDetailPage__price'>$120</span>
      </div>
      <div className='OrderDetailPage__list'>
        <CartItem disabled />
        <CartItem disabled />
        <CartItem disabled />
        <CartItem disabled />
      </div>
    </div>
  )
}

export default OrderDetailPage
