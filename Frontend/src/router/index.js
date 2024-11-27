import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
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
    },
    {
      path: '/ModificarUsuario/:id',
      name: 'ModificarUsuario',
      component: () => import('../views/UsersModify.vue')
    },
    {
      path: '/RegistrarUsuario',
      name: 'RegistrarUsuario',
      component: () => import('../views/UsersRegister.vue')
    }
  ]
});


export default router