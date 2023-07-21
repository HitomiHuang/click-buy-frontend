import {createRouter, createWebHistory} from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Login from '../views/LoginView.vue'
import Products from '../views/ProductsView.vue'

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
    path: '/products/:productId',
    name: 'product',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView.vue')
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