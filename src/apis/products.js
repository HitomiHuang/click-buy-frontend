import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getProducts() {
    return apiHelper.get('/products', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getProduct(productId){
    return apiHelper.get(`/products/${productId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}