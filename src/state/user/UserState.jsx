import React, { useReducer } from 'react'
import axios from 'axios'

import initalState from './initialState'
import { LOGIN, LOGOUT, SET_ERROR } from './types'
import UserContext from './UserContext'
import userReducer from './userReducer'

const UserState = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initalState)

  const checkToken = async () => {
    const token = window.localStorage.getItem('token')
    if (!token) {
      return false
    }
    const { data: response } = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/check/`,
      {
        token
      }
    )
    if (response.error) {
      dispatch({
        type: SET_ERROR,
        payload: response.error
      })
    } else {
      dispatch({
        type: LOGIN,
        payload: { ...response.data }
      })
    }
  }

  const login = async (user) => {
    const { data: response } = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/login/`,
      {
        email: user.email,
        password: user.password
      }
    )

    if (response.error) {
      dispatch({
        type: SET_ERROR,
        payload: response.error
      })
    } else {
      window.localStorage.setItem('token', response.data.token)
      dispatch({
        type: LOGIN,
        payload: { ...response.data }
      })
    }
  }

  const logout = () => {
    window.localStorage.clear('token')
    dispatch({
      type: LOGOUT
    })
  }

  return (
    <UserContext.Provider
      value={{
        id: state.id,
        name: state.name,
        lastname: state.lastname,
        email: state.email,
        password: state.password,
        isAuth: state.isAuth,
        error: state.error,
        login,
        logout,
        checkToken
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserState
