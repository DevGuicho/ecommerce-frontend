import { GET_PRODUCT, SET_PRODUCTS, TOGGLE_LOADING } from './types'

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      }
    case SET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload]
      }
    case GET_PRODUCT: {
      return {
        ...state,
        product: state.products.filter(
          (product) => product.id === action.payload
        )[0],
        isLoading: false
      }
    }

    default:
      return state
  }
}
