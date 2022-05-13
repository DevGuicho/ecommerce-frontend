import { useContext } from 'react'

import ProductContext from '../state/product/ProductContext'

const useProduct = () => {
  const UserContext = useContext(ProductContext)
  return {
    getProducts: UserContext.getProducts,
    getProduct: UserContext.getProduct,
    products: UserContext.products,
    product: UserContext.product,
    isLoading: UserContext.isLoading
  }
}

export default useProduct
