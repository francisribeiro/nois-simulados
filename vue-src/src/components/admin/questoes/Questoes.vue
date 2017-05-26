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
                            <router-link type="button" to="/questoes/add" class="btn btn-danger dropdown-toggle">Inserir Nova Questão</router-link>
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
                                        <input class="form-control" v-model="filterInput" type="text" placeholder="Procurar por Questões...">
                                    </div>
                                </div>
                                <br>
                                <table class="table table-striped table-hover">
                                    <tbody>
                                        <tr>
                                            <th>Título da Questão</th>
                                            <th>Status</th>
                                            <th>Opções</th>
                                        </tr>
                                        <tr valign="middle" v-for="question in filterBy(questions, filterInput)">
                                            <td>{{question.question}}</td>
                                            <td v-bind:class="{ 'ativa': question.status == 'ativa', 'inativa': question.status == 'inativa'}"><b>{{question.status | uppercase}}</b></td>
                                                 
                                            <td>
                                                <router-link class=" btn btn-success btn-sm" type="button " v-bind:to="{ path: 'questoes/view/' + question.id } ">Visualizar</router-link>
                                                <router-link class="btn btn-primary btn-sm" type="button " v-bind:to="{ path: 'questoes/edit/' + question.id } ">Editar</router-link>
                                                <a class="btn btn-danger btn-sm" type="button " v-on:click="confirmMsg(question.id) ">Apagar</a></td>
                                        </tr>
                                    </tbody>
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
                questions: [],
                filterInput: ''
            }
        },
    
        methods: {
            getAllQuestions() {
                this.$http.get('http://localhost:3000/questions/list').then((response) => {
                    this.questions = response.data.data
                }, error => {
                    console.log('error')
                })
            },
    
            deleteAlternatives(questionId) {
                this.$http.delete(`http://localhost:3000/alternatives/a/${questionId}`).then((response) => {
                    this.deleteQuestion(questionId)
                }), error => {
                    console.log('error')
                }
            },
    
            deleteQuestion(questionId) {
                this.$http.delete(`http://localhost:3000/questions/q/${questionId}`).then((response) => {
                    var index = this.questions.map(e => {
                        return e.id
                    }).indexOf(questionId)
                    this.questions.splice(index, 1)
                }), error => {
                    console.log('error')
                }
            },
    
            filterBy(list, value) {
                value = value.toLowerCase()
                return list.filter(function(question) {
                    return question.question.toLowerCase().indexOf(value) > -1;
                });
            },
    
            confirmMsg(questionId) {
                this.$swal({
                    title: 'Você tem certeza?',
                    text: "Você não poderá reverter isso!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sim, exclua isso!'
                }).then(() => {
                    this.deleteAlternatives(questionId)
                    this.$swal(
                        'Excluída!',
                        'Sua Questão foi apagada!',
                        'success'
                    )
                })
            },
        },
    
        created() {
            this.getAllQuestions()
        },

        updated() {
            this.getAllQuestions()
        },

        filters: {
            uppercase(string){
                return string.toUpperCase()
            }
        }
    }
</script>
