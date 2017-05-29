<template>
    <div class="ViewQuestoes">
        <header id="header">
            <div class="container">
                <div class="row">
                    <div class="col-md-10">
                        <h1><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Questões <small>Controle Suas Questões</small></h1>
                    </div>
                </div>
            </div>
            <!-- /.container -->
        </header>
        <section id="breadcrumb">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="active">Dashboard > Questões > Visualizar Questões</li>
                </ol>
            </div>
        </section>
        <form class="form-signin form-horizontal well form-size">
            <fieldset>
                <blockquote>
                    <p>{{question.question}}</p>
                    <small><cite><b>Alternativa A</b> - </cite>{{alternativas[0].alternative}} <b>({{alternativas[0].correct}})</b></small>
                    <small><cite><b>Alternativa B</b> - </cite>{{alternativas[1].alternative}} <b>({{alternativas[1].correct}})</b></small>
                    <small><cite><b>Alternativa C</b> - </cite>{{alternativas[2].alternative}} <b>({{alternativas[2].correct}})</b></small>
                    <small><cite><b>Alternativa D</b> - </cite>{{alternativas[3].alternative}} <b>({{alternativas[3].correct}})</b></small>
    
                </blockquote>
    
                <div class="col-lg-10 col-lg-offset-2">
                    <router-link to="/questoes" type="button" class="btn btn-success">Voltar</router-link>
                    <a class="btn btn-danger" type="button" v-on:click="confirmMsg(question.id)">Apagar</a></td>
                    <router-link type="button" id="atualizarButton" v-bind:to="{ path: '/questoes/edit/' + question.id }" class="btn btn-primary">Atualizar</router-link>
                </div>
            </fieldset>
        </form>
        <!-- /container -->
    
    </div>
</template>

<script>
    export default {
        name: 'ViewQuestoes',
    
        data() {
            return {
                question: [],
                alternativas: []
            }
        },
    
        methods: {
            getQuestionPerId(questionId) {
                this.$http.get(`http://localhost:3000/questions/q-s/${questionId}`).then((response) => {
                    this.question = response.data.data
                }, error => {
                    console.log('error')
                })
            },
    
            getAlternatives(questionId) {
                this.$http.get(`http://localhost:3000/alternatives/list/${questionId}`).then((response) => {
                    console.log(response);
                    this.alternativas = response.data.data
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
                    this.$router.push('/questoes')
                    console.log('aq')
                }), error => {
                    console.log('error')
                }
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
            }
        },
    
        created() {
            this.getQuestionPerId(this.$route.params.id),
            this.getAlternatives(this.$route.params.id)
        }
    }
</script>