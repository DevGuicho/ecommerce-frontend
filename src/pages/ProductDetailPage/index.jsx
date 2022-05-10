import { useNavigate } from 'react-router-dom'

import refri from '../../assets/fridge.jpg'
import Header from '../../components/Header'
import './styles.css'

const ProductDetailPage = () => {
  const navigate = useNavigate()
  return (
    <div className='ProductDetail container'>
      <div className='ProductDetail__header'>
        <Header />
      </div>
      <div className='ProductDetail__body'>
        <figure className='ProductDetail__figure'>
          <button
            className='ProductDetail__closeButton'
            onClick={() => navigate(-1)}
          >
            <i />
          </button>
          <img src={refri} alt='' className='ProductDetail__img' />
          <figcaption className='ProductDetail__caption'>
            <span className='ProductDetail__price'>$ 120,00</span>
            <h2 className='ProductDetail__name'>Retro refrigerador</h2>
            <p className='ProductDetail__description'>
              With its functional and practical interior, this refrigerator also
              fulfills a decorative function, adding personality and a
              retro-vintage aesthetic to your kitchen or workplace.
            </p>
          </figcaption>
        </figure>
        <button className='btn btn-primary ProductDetail__button'>
          <i />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  )
}

export default ProductDetailPage
