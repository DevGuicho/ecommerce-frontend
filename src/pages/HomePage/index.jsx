import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Product from '../../components/Product'
import ProductList from '../../components/ProductList'
import SearchInput from '../../components/SearchInput'
import useProduct from '../../hooks/useProduct'

import './styles.css'

const HomePage = () => {
  const { products, getProducts } = useProduct()

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <div className='HomePage__search'>
        <SearchInput />
      </div>
      <div className='HomePage__navbar'>
        <Navbar />
      </div>
      <ProductList>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ProductList>
    </div>
  )
}

export default HomePage
