import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, 
    {
      path: '/AltaUsuario',
      name: 'AltaUsuario',
      component: () => import('../views/NewUser.vue')
    }
  ]
})

export default router
