import {createRouter, createWebHistory} from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Login from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes
})

export default router