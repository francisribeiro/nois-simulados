import {
  router
} from '../main'

const API_URL = 'http://localhost:3000/'
const LOGIN_URL = API_URL + 'users/authenticate'

export default {

  user: {
    authenticated: false
  },

  login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds).then((response) => {
      if(response.body.code == 400){
           context.$swal(
          'Erro!',
          'Usuário ou Senha Inválidos!',
          'error'
        )
      }

      localStorage.setItem('id_token', response.body.data.token)
      this.user.authenticated = true
      if (redirect) {
        context.$router.push(redirect)
      }
    }, response => {
      context.error = err
    });
  },

  logout() {
    localStorage.removeItem('id_token')
    this.user.authenticated = false
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token')

    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },


  getAuthHeader() {
    return {
      'Authorization': localStorage.getItem('id_token')
    }
  }
}
