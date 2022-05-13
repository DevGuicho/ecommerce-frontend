/* eslint-disable multiline-ternary */
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Header from '../../components/Header'
import useProduct from '../../hooks/useProduct'

import './styles.css'

const ProductDetailPage = () => {
  const { getProduct, product, isLoading } = useProduct()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getProduct({ id })
  }, [])

  return (
    <div className='ProductDetail container'>
      <div className='ProductDetail__header'>
        <Header />
      </div>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className='ProductDetail__body'>
          <figure className='ProductDetail__figure'>
            <button
              className='ProductDetail__closeButton'
              onClick={() => navigate(-1)}
            >
              <i />
            </button>
            <img src={product?.imgUrl} alt='' className='ProductDetail__img' />
            <figcaption className='ProductDetail__caption'>
              <span className='ProductDetail__price'>{product?.price}</span>
              <h2 className='ProductDetail__name'>{product?.name}</h2>
              <p className='ProductDetail__description'>
                {product?.description}
              </p>
            </figcaption>
          </figure>
          <button className='btn btn-primary ProductDetail__button'>
            <i />
            <span>Add to cart</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default ProductDetailPage
