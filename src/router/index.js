import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import MyGamesPage from '../views/MyGamesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home_page',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login_page',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register_page',
      component: RegisterPage
    },
    {
      path: '/mygames',
      name: 'mygames_page',
      component: MyGamesPage
    },

  ]
})

export default router
