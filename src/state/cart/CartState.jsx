import { useReducer } from 'react'

import CartContext from './CartContext'
import cartReducer from './cartReducer'
import initialState from './intitalState'
import { ADD_PRODUCT, DELETE_PRODUCT } from './types'

const CartState = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addProduct = ({ product }) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: product
    })
  }

  const deleteProduct = ({ id }) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: Number(id)
    })
  }

  return (
    <CartContext.Provider
      value={{
        products: state.products,
        total: state.total,
        addProduct,
        deleteProduct
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartState
