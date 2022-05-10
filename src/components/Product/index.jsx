import { Link } from 'react-router-dom'
import fridge from '../../assets/fridge.jpg'

import './style.css'

const Product = () => {
  return (
    <div className='Product'>
      <Link to='/shop/product/fdasfdsa' className='Product__image'>
        <img src={fridge} alt='' width={163} height={163} />
      </Link>
      <div className='Product__caption'>
        <div className='Product__description'>
          <span>120,00</span>
          <p>Round Shelf</p>
        </div>
        <button className='Product__button'>
          <i />
        </button>
      </div>
    </div>
  )
}

export default Product
