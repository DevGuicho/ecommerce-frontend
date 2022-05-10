import refri from '../../assets/fridge.jpg'
import './styles.css'

const ProductDetailPage = () => {
  return (
    <div className='ProductDetail'>
      <figure className='ProductDetail__figure'>
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
  )
}

export default ProductDetailPage
