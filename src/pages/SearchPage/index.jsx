import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Navbar from '../../components/Navbar'
import Product from '../../components/Product'
import ProductList from '../../components/ProductList'
import SearchInput from '../../components/SearchInput'
import useProduct from '../../hooks/useProduct'

const SearchPage = () => {
  const { products } = useProduct()
  const { query } = useParams()

  const [filterProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(query.toLocaleLowerCase())
      )
    )
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
        {filterProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ProductList>
    </div>
  )
}

export default SearchPage
