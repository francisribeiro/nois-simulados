<template>
  <div class="Dashboard">
    <header id="header">
      <div class="container">
        <div class="row">
          <div class="col-md-10">
            <h1>
              <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
              <small>Controle Seus Simulados</small>
            </h1>
          </div>
  
          <div class="col-md-2">
            <div class="dropdown create">
              <button id="adicionarConteudo" class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Adicionar Conteúdo
                <span class="caret"></span>
              </button>
              <ul id="teste" class="dropdown-menu" aria-labelledby="adicionarConteudo">
                <li>
                  <router-link id="addQuestao" type="button" to="/questoes/add">Adicionar Questões</router-link>
                </li>
                <li>
                  <router-link type="button" to="/simulados/add">Adicionar Simulados</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- /.container -->
    </header>
    <section id="breadcrumb">
      <div class="container">
        <ol class="breadcrumb">
          <li class="active">Dashboard</li>
        </ol>
      </div>
    </section>
    <section id="main">
      <div class="container">
        <div class="row">
          <sidebar></sidebar>
          <div class="col-md-9">
            <!-- Visão Geral do Site -->
            <div class="panel panel-default">
              <div class="panel-heading main-color-bg">
                <h3 class="panel-title">Visão Geral do Sistema</h3>
              </div>
              <div class="panel-body">
                <div class="col-md-3">
                  <div class="well dash-box">
                    <h2>
                      <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span> {{numberOfSimulados}}
                    </h2>
                    <h4>Simulados</h4>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="well dash-box">
                    <h2>
                      <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> {{numberOfQuestions}}
                    </h2>
                    <h4>Questões</h4>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="well dash-box">
                    <h2>
                      <span class="glyphicon glyphicon-user" aria-hidden="true"></span> {{numberOfUsers}}
                    </h2>
                    <h4>Usuários</h4>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="well dash-box">
                    <h2>
                      <span class="glyphicon glyphicon-file" aria-hidden="true"></span>
                    </h2>
                    <h4>Relatórios</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import auth from '../../auth'

export default {
  name: 'dashboard',

  data() {
    return {
      user: [],
      numberOfQuestions: null,
      numberOfUsers: null,
      numberOfSimulados: null
    }
  },

  methods: {
    getNumberOfQuestions() {
      this.$http.get('http://localhost:3000/questions/q-c').then((response) => {
        this.numberOfQuestions = response.data.data.count
      }, error => {
        console.log('error')
      })
    },

    getNumberOfUsers() {
      this.$http.get('http://localhost:3000/users/u-c').then((response) => {
        this.numberOfUsers = response.data.data.count
      }, error => {
        console.log('error')
      })
    },
    getNumberOfSimulados() {
      this.$http.get('http://localhost:3000/simulados/s-c').then((response) => {
        this.numberOfSimulados = response.data.data.count
      }, error => {
        console.log('error')
      })
    },

    getProfile() {
      this.$http.get('http://localhost:3000/users/profile', {
        headers: auth.getAuthHeader()
      }).then((response) => {
        this.user = response.data.data.user
      }, error => {
        console.log('error getProfile')
      })
    }
  },

  created() {
    this.getNumberOfQuestions()
    this.getNumberOfUsers()
    this.getNumberOfSimulados()
  }
}
</script>

