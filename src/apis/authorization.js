import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  login({ account, password }) {
    return apiHelper.post('/login', {
      account,
      password
    })
  },
  get({ userId }) {
    return apiHelper.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getCurrentUser() {
    return apiHelper.get(`/get_current_user`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }

}