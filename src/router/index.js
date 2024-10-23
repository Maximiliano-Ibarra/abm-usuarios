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
    },
    {
      path: '/VerUsuarios',
      name: 'VerUsuarios',
      component: () => import('../views/UsersList.vue')
    }
  ]
})

export default router
