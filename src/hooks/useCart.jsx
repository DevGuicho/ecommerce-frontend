import { useContext } from 'react'

import CartContext from '../state/cart/CartContext'

const useCart = () => {
  const cartContext = useContext(CartContext)
  return {
    productsCart: cartContext.products,
    addProductToCart: cartContext.addProduct,
    deleteProductFromCart: cartContext.deleteProduct,
    total: cartContext.total
  }
}

export default useCart
