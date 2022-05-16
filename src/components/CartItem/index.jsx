import useCart from '../../hooks/useCart'
import currencyFormat from '../../utils/currencyFormat'
import './style.css'

const CartItem = ({ disabled, imgUrl, price, name, id }) => {
  const { deleteProductFromCart } = useCart()
  const handleClick = () => {
    deleteProductFromCart({ id })
  }
  return (
    <div className='CartItem'>
      <img
        className='CartItem__img'
        src={imgUrl}
        alt=''
        width={76}
        height={76}
      />
      <div className='CartItem__caption'>
        <h2>{name}</h2>
        <span>{currencyFormat(price || 0)}</span>
      </div>
      {!disabled && (
        <button className='CartItem__button' onClick={handleClick}>
          <i />
        </button>
      )}
    </div>
  )
}

export default CartItem
