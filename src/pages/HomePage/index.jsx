import Navbar from '../../components/Navbar'
import Product from '../../components/Product'
import ProductList from '../../components/ProductList'
import SearchInput from '../../components/SearchInput'
import './styles.css'

const HomePage = () => {
  return (
    <div>
      <div className='HomePage__search'>
        <SearchInput />
      </div>
      <div className='HomePage__navbar'>
        <Navbar />
      </div>
      <ProductList>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductList>
    </div>
  )
}

export default HomePage
