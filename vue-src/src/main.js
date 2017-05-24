import Vue from 'vue'
import App from './components/App'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'

//Admin files
import Profile from './components/admin/Profile'
import Dashboard from './components/admin/Dashboard'

//Questions
import AddQuestoes from './components/admin/questoes/AddQuestoes'
import AddAlternativas from './components/admin/questoes/AddAlternativas'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

import auth from './auth'

Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

// Check the user's auth status when the app starts
auth.checkAuth()

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '*',
      redirect: '/home'
    },
    {
      path:'/questoes/add',
      component:AddQuestoes
    }
    ,
    {
      path:'/alternativas/add',
      component:AddAlternativas
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (auth.user.authenticated)
      next()
    else
      next('/login')
  }
  next()
});

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
