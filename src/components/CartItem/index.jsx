import proudct from '../../assets/round_shelf.jpg'
import './style.css'

const CartItem = ({ disabled }) => {
  return (
    <div className='CartItem'>
      <img
        className='CartItem__img'
        src={proudct}
        alt=''
        width={76}
        height={76}
      />
      <div className='CartItem__caption'>
        <h2>Round Shelf</h2>
        <span>$120</span>
      </div>
      {!disabled && (
        <button className='CartItem__button'>
          <i />
        </button>
      )}
    </div>
  )
}

export default CartItem
