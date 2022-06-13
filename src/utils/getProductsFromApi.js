import { apiUrl } from '../config'

export const getProductsFromApi = async () => {
  const res = await fetch(`${apiUrl}/api/products/`)
  const { data } = await res.json()
  return data.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    imgUrl: product.img_url,
    stock: product.stock,
    categoryId: product.category_id
  }))
}

export const getProduct = async ({ id }) => {
  const res = await fetch(`${apiUrl}/api/products/${id}`)
  const { data: product } = await res.json()
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    imgUrl: product.img_url,
    stock: product.stock,
    categoryId: product.category_id
  }
}
