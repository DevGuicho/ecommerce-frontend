import React, { useReducer } from 'react'
import useUser from '../../hooks/useUser'
import getOrdersFromApi from '../../utils/getOrdersFromApi'

import initialState, { items } from './initialState'
import OrderContext from './OrderContext'
import orderReducer from './orderReducer'
import { ADD_ORDER, GET_ITEMS, GET_ORDER, SET_ORDERS } from './types'

const OrderState = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState)

  const { id } = useUser()

  const getOrders = async () => {
    const orders = await getOrdersFromApi(id)

    if (orders) {
      dispatch({
        type: SET_ORDERS,
        payload: orders
      })
    }
  }

  const getOrder = (id) => {
    dispatch({
      type: GET_ORDER,
      payload: id
    })
  }

  const getItems = (id) => {
    dispatch({
      type: GET_ITEMS,
      payload: items
    })
  }

  const addOrder = (products) => {
    dispatch({
      type: ADD_ORDER,
      payload: products
    })
  }

  return (
    <OrderContext.Provider
      value={{
        ...state,
        getOrders,
        getOrder,
        getItems,
        addOrder
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default OrderState
