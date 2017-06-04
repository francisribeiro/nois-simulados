<template>
    <div class="IniciarSimulado">
        <header id="header">
            <div class="container">
                <div class="row">
                    <div class="col-md-10">
                        <h1>
                            <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Simulado
                            <small>Controle Seu Simulado</small>
                        </h1>
                    </div>
                </div>
            </div>
            <!-- /.container -->
        </header>
    
        <section id="breadcrumb">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="active">Dashboard > Simulado > List Simulados</li>
                </ol>
            </div>
        </section>
        <div v-model="question" class="form-signin form-horizontal well form-size">
            <h4>
                <b>{{alternativesList[question].pergunta}}</b>
            </h4>
            <h4><input type="radio" name="radiogroup" v-model="picked" v-bind:value="defaultValue[0]"> {{alternativesList[question].a}}<br></h4>
            <h4><input type="radio" name="radiogroup" v-model="picked" v-bind:value="defaultValue[1]"> {{alternativesList[question].b}}<br></h4>
            <h4><input type="radio" name="radiogroup" v-model="picked" v-bind:value="defaultValue[2]"> {{alternativesList[question].c}}<br></h4>
            <h4><input type="radio" name="radiogroup" v-model="picked" v-bind:value="defaultValue[3]"> {{alternativesList[question].d}}<br></h4>
            <br>
            <pre>{{alternativesList[question]}}</pre>
            <div class="col-lg-10 col-lg-offset-1 text-center">
                <a v-on:click="decrementQuestion" v-if="question > 0" to="/" class="btn btn-success">Voltar</a>
                <a v-on:click="incrementQuestion" v-if="question < this.$store.state.simulado.size" class="btn btn-primary">Proxima </a>
                <a v-on:click="finalizarSimulado" v-if="question == this.$store.state.simulado.size" class="btn btn-info">Finalizar Simulado</a>
            </div>
            <br><br>
        </div>
    
    </div>
</template>


<script>

export default {
    name: 'iniciarSimulado',
    data() {
        return {
            alternativesList: [],
            respostas:[],
            question: 0,
            picked: null,
            defaultValue:['a', 'b', 'c', 'd']
        }
    },
    methods: {
        finalizarSimulado(){
            this.$store.state.setResposta(this.question, this.getAlternativePicked())
            this.confirmMsg() 
        },
        incrementQuestion() {
            this.$store.state.setResposta(this.question, this.getAlternativePicked())
            this.picked = null
            this.question += 1;
            this.$router.push(`/simulados/iniciar/${this.$store.state.simulado.id}/${this.question}`)
        },
        getAlternativePicked(){
            var alternativePicked = null
            if(this.picked == 'a'){
                alternativePicked = this.alternativesList[this.question].a;
            }else if(this.picked == 'b'){
                alternativePicked = this.alternativesList[this.question].b;
            }else if(this.picked == 'c'){
                alternativePicked = this.alternativesList[this.question].c;
            }else{
                alternativePicked = this.alternativesList[this.question].d;
            }                                                
            return alternativePicked;
        },
        decrementQuestion() {
            this.question -= 1;
            this.$router.push(`/simulados/iniciar/${this.$store.state.simulado.id}/${this.question}`)
        },
        getQuestions(simulado, questoes) {
            var obj = {
                simulado: parseInt(simulado),
                questoes: questoes
            }
            this.$http.post('http://localhost:3000/questoes-simulado', obj)
                .then(response => {
                    this.generateResponse(questoes);
                }, response => {
                    console.log('error')
                });
        },
        generateResponse(questions) {
            var t = this;
            var id = 0;
            var cont = 0;
            for(var i = 0; i < questions.length; i++){
                cont++;
                if(cont == questions.length){
                    t.getPergunta(questions[i], t, id)
                    id++;
                    this.sortAlternativeList();
                } else{
                    t.getPergunta(questions[i], t, id)
                    id++;
                }
                
            }
        },
        sortAlternativeList(){
            this.alternativesList.sort(function(a, b){
                    return a.id - b.id;
            });
        },
        getPergunta(questionId, t, id) {
            var url = 'http://localhost:3000/questions/pergunta/' + questionId;
            t.$http.get(url)
                .then((response) => {
                    t.getAlternative(questionId, t, response.body.data, id);
                }, error => {
                    console.log('error')
                });

        },
        getAlternative(questionId, t, data, id) {
            var url = 'http://localhost:3000/alternatives/list/' + questionId;
            t.$http.get(url)
                .then(response => {
                    var array = response.body.data;
                    var cont = 0;
                    for (var i = 0; i < array.length; i += 4) {
                        cont = i;
                        var obj = {
                            id: id,
                            pergunta: data.pergunta,
                            a: array[cont].alternative,
                            b: array[cont + 1].alternative,
                            c: array[cont + 2].alternative,
                            d: array[cont + 3].alternative,
                            correta: t.getCorrect(array),
                            feedback: data.feedback,
                            questionId: questionId
                        }
                        t.alternativesList.push(obj);
                        t.$store.state.setCorreta(obj.correta);
                    }
                }, response => {
                    console.log('error')
                });
        },
        getCorrect(array){
            var correta = null;
            for(var i = 0; i < array.length; i++){
                if(array[i].correct){
                    correta = array[i].alternative;
                    break;
                }
            }
            return correta;
        },
        confirmMsg() {
            this.$swal({
                title: 'Você tem certeza?',
                text: "Deseja Realmente Finalizar o Simulado?",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, termine isso!'
            }).then(() => {
                this.$store.state.setAlternativeList(this.alternativesList);
                this.$router.push(`/simulados/correcao/${this.$store.state.simulado.id}`)
                this.$swal(
                    'Finalizado!',
                    'Confira seu resultado!',
                    'success'
                )
            })
        }
    },
    created() {
        this.$store.state.simulado.corretas = []
        this.getQuestions(this.$store.state.simulado.id, this.$store.state.simulado.questoes);
        this.$store.state.simulado.resposta = []
    }

}
</script>