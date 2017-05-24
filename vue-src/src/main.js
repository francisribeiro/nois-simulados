import Vue from 'vue'
import App from './components/App'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'

//Admin files
import Profile from './components/admin/Profile'
import Dashboard from './components/admin/Dashboard'
import Sidebar from './components/admin/Sidebar'
import Questoes from './components/admin/questoes/Questoes'
import AddQuestoes from './components/admin/questoes/AddQuestoes'
import AddAlternativas from './components/admin/questoes/AddAlternativas'
import EditQuestoes from './components/admin/questoes/EditQuestoes'
import EditAlternativas from './components/admin/questoes/EditQuestoes'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

import auth from './auth'

Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

// Check the user's auth status when the app starts
auth.checkAuth()

// App Routes
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
      path: '/questoes',
      component: Questoes
    },
    {
      path: '/questoes/add',
      component: AddQuestoes
    },
    {
      path: '/alternativas/add',
      component: AddAlternativas
    },
    {
      path: '/questoes/edit/:id',
      component: EditQuestoes
    },
    {
      path: '/alternativas/edit/:id',
      component: EditAlternativas
    }
  ]
})


// Components register
Vue.component('sidebar', Sidebar);

// Route Safe Guard
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (auth.user.authenticated)
      next()
    else
      next('/login')
  }
  next()
});

// App Register
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
