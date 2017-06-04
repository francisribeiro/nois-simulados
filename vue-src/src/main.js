import Vue from 'vue'
import App from './components/App'
import store from './store'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'

// Admin files
import Profile from './components/admin/Profile'
import Dashboard from './components/admin/Dashboard'
import Sidebar from './components/admin/Sidebar'

// Questions
import Questoes from './components/admin/questoes/Questoes'
import AddQuestoes from './components/admin/questoes/AddQuestoes'
import AddAlternativas from './components/admin/questoes/AddAlternativas'
import EditQuestoes from './components/admin/questoes/EditQuestoes'
import EditAlternativas from './components/admin/questoes/EditAlternativas'
import ViewQuestoes from './components/admin/questoes/ViewQuestoes'

// Users
import Usuarios from './components/admin/usuarios/Usuarios'
import ViewUsuarios from './components/admin/usuarios/ViewUsuarios'
import EditUsuarios from './components/admin/usuarios/EditUsuarios'

// Simulados
import AddSimulados from './components/admin/simulados/AddSimulados'
import IniciarSimulado from './components/admin/simulados/IniciarSimulado'
import Simulados from './components/admin/simulados/Simulados'
import ViewSimulados from './components/admin/simulados/ViewSimulados'

// Relatórios
import Relatorios from './components/admin/relatorios/Relatorios'

// Sweet Alert
import VueSweetAlert from 'vue-sweetalert'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// Highcharts
import VueHighcharts from 'vue-highcharts';

// Uses
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueSweetAlert)
Vue.use(VueHighcharts);

import auth from './auth'

Vue.http.headers.common['Authorization'] = localStorage.getItem('id_token');

// Check the user's auth status when the app starts
auth.checkAuth()

// App Routes
const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/home', component: Home},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '*', redirect: '/home'},
    {path: '/dashboard', component: Dashboard, meta: {requiresAuth: true}},
    {path: '/profile', component: Profile, meta: {requiresAuth: true}},
    {path: '/questoes', component: Questoes, meta: {requiresAuth: true}},
    {path: '/questoes/add', component: AddQuestoes, meta: {requiresAuth: true}},
    {path: '/alternativas/add', component: AddAlternativas, meta: {requiresAuth: true}},
    {path: '/questoes/edit/:id', component: EditQuestoes, meta: {requiresAuth: true}},
    {path: '/alternativas/edit/:id', component: EditAlternativas, meta: {requiresAuth: true}},
    {path: '/questoes/view/:id', component: ViewQuestoes, meta: {requiresAuth: true}},
    {path: '/usuarios', component: Usuarios, meta: {requiresAuth: true}},
    {path: '/usuarios/view/:username', component: ViewUsuarios, meta: {requiresAuth: true}},
    {path: '/profile/edit/:username', component: EditUsuarios, meta: {requiresAuth: true}},
    {path: '/simulados', component: Simulados, meta: {requiresAuth: true}},
    {path: '/simulados/add', component: AddSimulados, meta: {requiresAuth: true}},
    {path: '/simulados/iniciar/:sid/:qid', component: IniciarSimulado, meta: {requiresAuth: true}},
    {path: '/simulados/view/:id', component: ViewSimulados, meta: {requiresAuth: true}},
    {path: '/relatorios', component: Relatorios, meta: {requiresAuth: true}}
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
  store,
  render: h => h(App)
}).$mount('#app');
