import { LOGIN, LOGOUT, SET_ERROR } from './types'
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
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
