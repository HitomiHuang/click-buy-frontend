import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  addToCart(productId, amount) {
    const data = {
      productId,
      amount
    }
    return apiHelper.post('/carts/add', data, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}