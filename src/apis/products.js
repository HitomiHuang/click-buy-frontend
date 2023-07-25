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
  searchProducts(filterData) {
    return apiHelper.post('/products/search', filterData, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getProductsByShop(){
    return apiHelper.get('/products/seller', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addProduct(product){
    return apiHelper.post('/products/add', product, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  editProduct(product){
    return apiHelper.put('/products/edit', product, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }

}