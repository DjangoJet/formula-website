import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Variables from './views/Variables.vue'
import Formulas from './views/Formulas.vue'
import Pack from './views/Pack.vue'
import Packs from './views/Packs.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import MyAccount from './views/MyAccount.vue'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/variables',
      name: 'variables',
      component: Variables
    },
    {
      path: '/formulas',
      name: 'formulas',
      component: Formulas
    },
    {
      path: '/packs',
      name: 'packs',
      component: Packs
    },
    {
      path: '/packs/:id',
      name: 'pack',
      component: Pack,
      meta: {
        guest: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        guest: true
      }
    },
    {
      path: '/me',
      name: 'me',
      component: MyAccount,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.is_admin == 1) {
          next()
        }
        else {
          next({ name: 'userboard' })
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('token') == null) {
      next()
    }
    else {
      next({ name: 'userboard' })
    }
  } else {
    next()
  }
})