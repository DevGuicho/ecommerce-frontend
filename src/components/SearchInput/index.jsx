import iconSearch from '../../assets/noun_Search.svg'

import './styles.css'

const SearchInput = () => {
  return (
    <form className='SearchInput'>
      <button className='SearchInput__button'>
        <img src={iconSearch} alt='' width={17} height={17} />
      </button>
      <input
        type='search'
        name='search'
        id='search'
        placeholder='Search Product'
        autoComplete='off'
      />
    </form>
  )
}

export default SearchInput
