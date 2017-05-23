<template>
  <div class="Register">
    <div class="container theme-showcase" role="main">
  
      <!-- Register -->
      <form class="form-signin form-horizontal well form-size" v-on:submit.prevent="registerUser">
        <fieldset>
          <legend>Inscreva-se</legend>
  
          <label for="inputNome" class="col-lg-2 control-label">Nome</label>
          <div class="col-lg-10">
            <input type="text" class="form-control" id="inputNome" placeholder="Nome" required autofocus v-model="name" name="name">
          </div>
  
          <label for="inputUsuario" class="col-lg-2 control-label">Usuário</label>
          <div class="col-lg-10">
            <input type="text" class="form-control" id="inputUsuario" placeholder="Usuário" required v-model="username" name="username">
          </div>
  
          <label for="inputEmail" class="col-lg-2 control-label">Email</label>
          <div class="col-lg-10">
            <input type="email" class="form-control" id="inputEmail" placeholder="Email" required v-model="email" name="email">
          </div>
  
          <label for="inputPassword" class="col-lg-2 control-label">Senha</label>
          <div class="col-lg-10">
            <input type="password" class="form-control" id="inputPassword" placeholder="Senha" required v-model="password" name="password">
          </div>
  
          <label for="inputTipo" class="col-lg-2 control-label">Tipo</label>
          <div class="col-lg-10">
            <select class="form-control" id="inputTipo" required v-model="selected" name="type" required>
                                <option value="" disabled hidden>Escolha uma opção...</option>
                                <option v-for="type in types" v-bind:value="type.id">{{type.name}}</option>
                            </select>
          </div>
  
          <div class="col-lg-10 col-lg-offset-2">
            <button type="submit" class="btn btn-lg btn-primary btn-block" value="Submit">Registar</button>
          </div>
        </fieldset>
      </form>
    </div>
    <!-- /container -->
  
  </div>
</template>

<script>
  export default {
    name: 'register',
    data() {
      return {
        name: '',
        username: '',
        email: '',
        password: '',
        selected: '',
        types: [{
            id: 'aluno',
            name: "Aluno"
          },
          {
            id: 'professor',
            name: "Professor"
          }
        ]
      }
    },
    methods: {
      registerUser: function() {
        const user = {
          name: this.name,
          username: this.username,
          email: this.email,
          password: this.password,
          type: this.selected
        }
  
        this.$http.post('http://localhost:3000/users/register', user).then(response => {
          this.$router.push('/login')
        }, response => {
          console.log('error')
        });
      }
    }
  }
</script>

