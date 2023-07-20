import { apiHelper } from '../utils/helpers'

export default{
  login({ account, password }){
    return apiHelper.post('/login', {
      account,
      password
    })
  }

}