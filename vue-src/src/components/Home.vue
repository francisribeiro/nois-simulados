<template>
  <div class="Home">
    <div class="container theme-showcase" role="main">
  
      <!-- Main jumbotron -->
      <div class="jumbotron text-center">
        <h1>Nois Simulados</h1>
        <p>Olá, seja muito bem vindo ao Nois Simulados!</p>
        <p>Caso ainda você seja novo por aqui Increva-se! Ou faça login.</p>
        <div>
          <router-link class="btn btn-primary" to="/register">Inscreva-se</router-link>
          <router-link class="btn btn-default" to="/login">Login</router-link>
        </div>
      </div>
  
      <div class="row">
        <div class="col-md-4">
          <h3>Lorem ipsum </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="col-md-4">
          <h3>Duis aute </h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div class="col-md-4">
          <h3>Excepteur sint</h3>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
  
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

