import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getProducts() {
    return apiHelper.get('/products', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getProduct(productId) {
    return apiHelper.get(`/products/${productId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  searchProducts(keyword, orderBy, minPrice, maxPrice) {
    const data = { keyword, orderBy, minPrice, maxPrice}
    return apiHelper.post('/products/search', data, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}