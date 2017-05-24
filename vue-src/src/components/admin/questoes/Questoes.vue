<template>
    <div class="Questoes">
        <header id="header">
            <div class="container">
                <div class="row">
                    <div class="col-md-10">
                        <h1><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Questões <small>Controle Suas Questões</small></h1>
                    </div>
    
                    <div class="col-md-2">
                        <div class="dropdown create">
                            <router-link type="button" to="/questoes/add" class="btn btn-primary dropdown-toggle">Inserir Nova Questão</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.container -->
        </header>
        <section id="breadcrumb">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="active">Dashboard > Questões</li>
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
                                <h3 class="panel-title">Questões</h3>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Procurar por Questões...">
                                    </div>
                                </div>
                                <br>
                                    <table class="table table-striped table-hover">
                                        <tr>
                                            <th>Título da Questão</th>
                                            <th>Status</th>
                                            <th></th>
                                        </tr>
                                        <tr v-for="question in questions">
                                            <td>{{question.question}}</td>
                                            <td><b>{{question.status}}</b></td>
                                            <td>
                                                <router-link class="btn btn-primary" type="button" v-bind:to="{ path: 'questoes/edit/' + question.id }">Editar</router-link>
                                                <a class="btn btn-danger" type="button">Apagar</a></td>
                                        </tr>
                                    </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    </div>
</template>

<script>
    export default {
        name: 'Questoes',
        data() {
            return {
                questions: []
            }
        },
    
        methods: {
            getLastQuestion() {
                this.$http.get('http://localhost:3000/questions/list').then((response) => {
                    this.questions = response.data.data
                }, error => {
                    console.log('error')
                })
            }
        },
        created() {
            this.getLastQuestion()
        }
    }
</script>
