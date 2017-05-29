<template>
  <div class="Login">
    <div class="container theme-showcase" role="main">
  
      <!-- Login -->
      <form class="form-signin well" v-on:submit.prevent="submit">
        <legend>Fazer login</legend>
        <label for="inputUsername" class="sr-only">Usuário</label>
        <input v-model="credentials.username" type="text" id="inputUsername" class="form-control" placeholder="Nome de Usuário" required autofocus name="username">
        <label for="inputPassword" class="sr-only">Senha</label>
        <input v-model="credentials.password" type="password" id="inputPassword" class="form-control" placeholder="Senha" required name="password">
        <button id="login" class="btn btn-lg btn-primary btn-block" type="submit">Fazer login</button>
      </form>
  
    </div>
    <!-- /container -->
  </div>
</template>

<script>
  import auth from '../auth'
  
  export default {
  
    data() {
      return {
        credentials: {
          username: '',
          password: ''
        },
        error: ''
      }
    },
  
    methods: {
  
      submit() {
  
        var credentials = {
          username: this.credentials.username,
          password: this.credentials.password
        }
        
        auth.login(this, credentials, '/dashboard')
  
      }
    }
  
  }
</script>

