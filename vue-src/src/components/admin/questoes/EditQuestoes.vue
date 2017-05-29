<template>
    <div class="EditQuestoes">
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
                    <li class="active">Dashboard > Questões > Editar Questões</li>
                </ol>
            </div>
        </section>
        <form class="form-signin form-horizontal well form-size" v-on:submit.prevent="updateQuestion">
            <fieldset>
                <legend>Editar Questão</legend>
    
                <label for="inputQuestion" class="col-lg-2 control-label">Questão</label>
                <div class="col-lg-10">
                    <textarea class="form-control" rows="3" id="inputQuestion" placeholder="Insira a Questão" required autofocus v-model="question.question" name="question"></textarea>
                </div>
    
                <label for="inputArea" class="col-lg-2 control-label">Área</label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" id="inputArea" placeholder="Insira a Área de Conhecimento" required v-model="question.area" name="area">
                </div>
    
                <label for="inputStatus" class="col-lg-2 control-label">Status</label>
                <div class="col-lg-10">
                    <select class="form-control" id="inputStatus" required v-model="question.status" name="status" required>
                            <option value="" disabled hidden>Qual o status da Questão?</option>
                            <option v-for="status in options" v-bind:value="status.id">{{status.name}}</option>
                        </select>
                </div>
    
                <label for="inputFeedback" class="col-lg-2 control-label">Feedback</label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" id="inputUsuario" placeholder="Qual o feedback da Questão?" required v-model="question.feedback" name="feedback">
                </div>
    
                <div class="col-lg-10 col-lg-offset-2">
                    <button v-on:click="goBack" class="btn btn-success">Voltar</button>
                    <button type="reset" class="btn btn-danger" value="Reset">Limpar Campos</button>
                    <button type="submit" id="continuarEdicao" class="btn btn-primary" value="Submit">Continuar Edição</button>
                </div>
            </fieldset>
        </form>
        <!-- /container -->
    
    </div>
</template>

<script>
    export default {
        name: 'EditQuestoes',
        
        data() {
            return {
                question:[],    
                options: [
                    {id: 'ativa', name: 'Ativa'},
                    {id: 'inativa', name: 'Inativa'}
                ],
                aux:true
            }
        },

        methods: {
            getQuestion() {
                this.$http.get(`http://localhost:3000/questions/q-s/${this.$route.params.id}`).then((response) => {
                    this.question = response.data.data
                }, error => {
                    console.log('error')
                })
            },

            updateQuestion() {
                this.$http.put('http://localhost:3000/questions/', this.question).then((response) => {
                    if(this.aux)
                        this.$router.push(`/alternativas/edit/${this.question.id}`)
                }, error => {
                    console.log('error')
                })
            },

            goBack(){
                this.aux = false
                this.$router.push('/questoes')
            }
        },

        created(){
            this.getQuestion()
        }
    }
</script>