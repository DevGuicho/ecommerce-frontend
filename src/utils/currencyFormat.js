const currencyFormat = (price = 0) =>
  price.toLocaleString('en', { style: 'currency', currency: 'USD' })

export default currencyFormat
