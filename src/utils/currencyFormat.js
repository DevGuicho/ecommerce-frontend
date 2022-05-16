const currencyFormat = (price) =>
  price.toLocaleString('en', { style: 'currency', currency: 'USD' })

export default currencyFormat
