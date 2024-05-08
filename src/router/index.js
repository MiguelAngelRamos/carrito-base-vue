import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import CarritoView from '@/views/CarritoView.vue'
// shift + alt + flecha hacia abajo, para repetir la ultima linea

//* http://localhost:5173
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/login', name: 'Login', component: LoginView},
    { path: '/carrito', name: 'Carrito', component: CarritoView }
  ]
})

export default router
