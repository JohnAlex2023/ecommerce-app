import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Admin from '../pages/Admin.vue'
import ProductList from '../components/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue';
import Register from '../pages/Register.vue';

const routes = [
  // ...existing code...
{ path: '/', name: 'Home', component: Home },
{ path: '/home', name: 'HomePage', component: Home },
// ...existing code...
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/admin', component: Admin },
  { path: '/', name: 'Home', component: Home },
  { path: '/productos', name: 'Catalogo', component: ProductList },
  { path: '/producto/:id', name: 'ProductDetail', component: ProductDetail, props: true },
  {
    path: '/contacto',
    component: () => import('../pages/Contacto.vue')
  },
  {
    path: '/terminos',
    component: () => import('../pages/Terminos.vue')
  },
  { path: '/carrito', name: 'Carrito', component: () => import('../pages/Carrito.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
