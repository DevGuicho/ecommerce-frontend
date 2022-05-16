import React, { useReducer } from 'react'

import initalState from './initialState'
import { LOGIN, LOGOUT } from './types'
import UserContext from './UserContext'
import userReducer from './userReducer'

const UserState = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initalState)

  const login = (user) => {
    dispatch({
      type: LOGIN,
      payload: user
    })
  }

  const logout = () => {
    dispatch({
      type: LOGOUT
    })
  }

  return (
    <UserContext.Provider
      value={{
        name: state.name,
        lastname: state.lastname,
        email: state.email,
        password: state.password,
        isAuth: state.isAuth,
        login,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserState
