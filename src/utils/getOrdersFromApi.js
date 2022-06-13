import axios from 'axios'

const getOrdersFromApi = async (id) => {
  const { data } = await axios(
    `${import.meta.env.VITE_API_URL}/api/orders/${id}`
  )
  if (data.data) {
    return data.data.map((order) => ({
      id: order.id,
      date: order.date,
      totalPago: order.total_price,
      totalProductos: order.products.length,
      products: order.products.map((product) => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        imgUrl: product.img_url,
        stock: product.stock,
        categoryId: product.category_id
      }))
    }))
  }
}

export default getOrdersFromApi
