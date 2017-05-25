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
                    <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                </blockquote>
    
                <div class="col-lg-10 col-lg-offset-2">
                    <router-link to="/questoes" type="button" class="btn btn-lg btn-success">Voltar</router-link>
                    <router-link to="/dashboard" type="button" class="btn btn-lg btn-danger">Apagar</router-link>
                    <router-link  type="button" v-bind:to="{ path: '/questoes/edit/' + question.id }" class="btn btn-lg btn-primary">Atualizar</router-link>
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
                question:[]
            }
        },

        methods:{
            getQuestionPerId(questionId){
                this.$http.get(`http://localhost:3000/questions/q-s/${questionId}`).then((response)=>{
                    this.question = response.data.data
                }, error =>{
                    console.log('error')
                })
            }
        },

        created(){
            this.getQuestionPerId(this.$route.params.id)
        }
    }
</script>