import { useContext } from 'react'

import OrderContext from '../state/order/OrderContext'

const useOrders = () => {
  const { orders, order, items, getOrder, getItems, getOrders } =
    useContext(OrderContext)
  return { orders, order, getOrder, getItems, items, getOrders }
}

export default useOrders
