import { GET_ITEMS, GET_ORDER, SET_ORDERS } from './types'

export default (state, action) => {
  switch (action.type) {
    case GET_ORDER:
      return {
        ...state,
        order: state.orders.filter((order) => order.id === action.payload)[0]
      }
    case GET_ITEMS:
      return {
        ...state,
        items: [...action.payload]
      }
    case SET_ORDERS:
      return {
        ...state,
        orders: [...action.payload]
      }
    default:
      return state
  }
}
