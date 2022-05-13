import { GET_PRODUCT, TOGGLE_LOADING } from './types'

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      }
    case GET_PRODUCT: {
      return {
        ...state,
        product: state.products.filter(
          (product) => product.id === action.value
        )[0],
        isLoading: false
      }
    }

    default:
      return state
  }
}
