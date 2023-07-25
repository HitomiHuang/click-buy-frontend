import {createRouter, createWebHistory} from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Login from '../views/LoginView.vue'
import Products from '../views/ProductsView.vue'
import store from '../store'

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
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/seller/addProduct',
    name: 'add-product',
    component: () => import('../views/AddProduct.vue')
  },
  {
    path: '/seller/editProduct/:productId',
    name: 'edit-product',
    component: () => import('../views/EditProduct.vue')
  },
  {
    path: '/seller/:shopId',
    name: 'seller',
    component: () => import('../views/SellerView.vue')
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

router.beforeEach((to, from, next) => {
  store.dispatch('fetchCurrentUser')
  next()
})

export default router