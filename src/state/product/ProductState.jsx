import { useReducer } from 'react'

import ProductContext from './ProductContext'
import ProductReducer from './ProductReducer'
import { GET_PRODUCT, SET_PRODUCTS, TOGGLE_LOADING } from './types'
import initialState from './initialState'

const ProductState = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState)

  const toggleLoading = () => ({
    type: TOGGLE_LOADING
  })

  const getProducts = () => {
    dispatch({
      type: SET_PRODUCTS,
      value: []
    })
  }

  const getProduct = ({ id }) => {
    dispatch(toggleLoading())
    dispatch({
      type: GET_PRODUCT,
      value: Number(id)
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
