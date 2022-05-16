import { LOGIN, LOGOUT } from './types'
import initalState from './initialState'

export default (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
        isAuth: true
      }
    case LOGOUT:
      return { ...initalState }
    default:
      return state
  }
}
