import { useReducer } from 'react'

import ProductContext from './ProductContext'
import ProductReducer from './ProductReducer'
import { GET_PRODUCT, SET_PRODUCTS, TOGGLE_LOADING } from './types'
import initialState from './initialState'
import { getProductsFromApi } from '../../utils/getProductsFromApi'

const ProductState = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState)

  const toggleLoading = () => ({
    type: TOGGLE_LOADING
  })

  const getProducts = async () => {
    const products = await getProductsFromApi()

    dispatch({
      type: SET_PRODUCTS,
      payload: products
    })
  }

  const getProduct = ({ id }) => {
    dispatch(toggleLoading())
    dispatch({
      type: GET_PRODUCT,
      payload: Number(id)
    })
  }

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        product: state.product,
        isLoading: state.isLoading,
        getProducts,
        getProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductState
