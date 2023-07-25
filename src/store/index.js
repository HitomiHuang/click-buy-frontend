import { createStore } from 'vuex'
import usersAPI from '../apis/authorization'

export default createStore({
  state: {
    currentUser: {
      id: -1,
      name: '',
      avatar: '',
      role: '',
      shopId: -1
    },
    isAuthenticated: false
  },
  getters: {
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.isAuthenticated = true
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const response = await usersAPI.getCurrentUser()

        const { id, name, avatar, role, shopId } = response.data.data

        commit('setCurrentUser', {
          id,
          name,
          avatar,
          role,
          shopId
        })
      } catch (error) {
        console.error(error.message)
      }
    }
  },
  modules: {
  }
})
