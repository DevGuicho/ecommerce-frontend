import axios from 'axios'
import { useReducer } from 'react'
import useUser from '../../hooks/useUser'

import CartContext from './CartContext'
import cartReducer from './cartReducer'
import initialState from './intitalState'
import { ADD_PRODUCT, CLEAR_CART, DELETE_PRODUCT, SET_ERROR } from './types'

const CartState = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const { id } = useUser()

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

  const payCart = async () => {
    const data = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/orders/`,
      {
        total: state.total,
        user: Number(id),
        products: state.products.map((product) => Number(product.id))
      }
    )
    if (data.error) {
      dispatch({
        type: SET_ERROR,
        payload: data.error
      })
    } else {
      dispatch({
        type: CLEAR_CART
      })
    }
  }

  return (
    <CartContext.Provider
      value={{
        products: state.products,
        total: state.total,
        addProduct,
        deleteProduct,
        payCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartState
