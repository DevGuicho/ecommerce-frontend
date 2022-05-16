/* eslint-disable indent */
import { ADD_PRODUCT, DELETE_PRODUCT } from './types'

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
    default:
      return state
  }
}
