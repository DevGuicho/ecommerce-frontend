/* eslint-disable indent */
import { ADD_PRODUCT, CLEAR_CART, DELETE_PRODUCT, SET_ERROR } from './types'

export default (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        total: [...state.products, action.payload]
          .map((product) => product.price)
          .reduce((prev, current) => prev + current)
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
        total:
          state.products.filter((product) => product.id !== action.payload)
            .length === 0
            ? 0
            : state.products
                .filter((product) => product.id !== action.payload)
                .map((product) => product.price)
                .reduce((prev, current) => prev + current)
      }
    case CLEAR_CART:
      return {
        ...state,
        total: 0,
        products: []
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
