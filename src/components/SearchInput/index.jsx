import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import iconSearch from '../../assets/noun_Search.svg'
import './styles.css'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/shop/search/${search}`)
  }

  return (
    <form className='SearchInput' onSubmit={handleSubmit}>
      <button className='SearchInput__button'>
        <img src={iconSearch} alt='' width={17} height={17} />
      </button>
      <input
        type='search'
        name='search'
        id='search'
        placeholder='Search Product'
        autoComplete='off'
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchInput
