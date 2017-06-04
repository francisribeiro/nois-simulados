<template>
    <div class="ViewSimulados">
        <header id="header">
            <div class="container">
                <div class="row">
                    <div class="col-md-10">
                        <h1><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Simulados <small>Controle Seus Simulados</small></h1>
                    </div>
                </div>
            </div>
            <!-- /.container -->
        </header>
        <section id="breadcrumb">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="active">Dashboard > Simulados > Visualizar Simulados</li>
                </ol>
            </div>
        </section>
        <form class="form-signin form-horizontal well form-size">
            <fieldset>
                <blockquote>
                    <p><b>{{simulado.titulo}}</b></p>
                    <p>Tempo de Execução: {{simulado.tempoexecucao | formatDate}}</p>
                    <br>
                    <div v-for="alt in alternativesList">
                        <p><b>{{alt.pergunta}}</b></p>
                        <h4><small v-bind:class="{'ok': correcao[alt.id] == alt.a, 'inativa': erradas[alt.id] == alt.a}">{{alt.a}}</b></small></h4>
                        <h4><small v-bind:class="{'ok': correcao[alt.id] == alt.b, 'inativa': erradas[alt.id] == alt.b}">{{alt.b}}</b></small></h4>
                        <h4><small v-bind:class="{'ok': correcao[alt.id] == alt.c, 'inativa': erradas[alt.id] == alt.c}">{{alt.c}}</b></small></h4>
                        <h4><small v-bind:class="{'ok': correcao[alt.id] == alt.d, 'inativa': erradas[alt.id] == alt.d}">{{alt.d}}</b></small></h4>
                        <pre><b>Feedback do Professor:</b><br>{{alt.feedback}}</pre>
                        <br>
                    </div>
                                        
                </blockquote>
    
                <div class="col-lg-10 col-lg-offset-2">
                    <router-link to="/simulados" type="button" class="btn btn-success">Voltar</router-link>
                </div>
            </fieldset>
        </form>
        <!-- /container -->
    
    </div>
</template>

<script>
    export default {
        name: 'ViewSimulados',
    
        data() {
            return {
                simulado: [],
                alternativesList: [],
                respostas:[],
                corretas:[],
                correcao: [],
                erradas: []
            }
        },
    
        methods: {
            getSimuladoPerId(simuladoID) {
                this.$http.get(`http://localhost:3000/simulados/${simuladoID}`).then((response) => {
                    this.simulado = response.data.data
                }, error => {
                    console.log('error')
                })
            },
    
            getAlternatives(simuladoId) {
                this.$http.get(`http://localhost:3000/alternatives/simulado/${simuladoId}`).then((response) => {
                    this.generateResponse(response.body.data.questoes);
                }, error => {
                    console.log('error')
                })
            },
            generateResponse(questions){
            var t = this;
            var id = 0;
            questions.forEach(function(q){
                t.getPergunta(q, t, id)
                id++;
            });
        },
        getPergunta(questionId, t, id){
            var url = 'http://localhost:3000/questions/pergunta/' + questionId;
            t.$http.get(url)
            .then((response) => {
                t.getAlternative(questionId, t, response.body.data, id);
            }, error => {
                console.log('error')
            });
            
        },
        getAlternative(questionId, t, data, id){
            var url = 'http://localhost:3000/alternatives/list/' + questionId;
                t.$http.get(url)
                .then(response => {
                    var array = response.body.data;
                    var cont = 0;
                    for(var i=0; i<array.length; i+=4){
                        cont = i;
                        var obj = {
                            id:id,
                            pergunta: data.pergunta,
                            a: array[cont].alternative,
                            b: array[cont+1].alternative,
                            c: array[cont+2].alternative,
                            d: array[cont+3].alternative,
                            feedback: data.feedback
                        }
                        this.alternativesList.push(obj);
                    }
                }, response => {
                    console.log('error')
                });
            },
            corrigirSimulado(){
                for(var i = 0; i < this.respostas.length; i++){
                    if(this.respostas[i] == this.corretas[i]){
                        console.log('acertou a questão ' + i);
                        this.correcao.push(this.respostas[i]);
                    }else {
                        console.log('errou a questão ' + i + '. A correta é a ' + this.corretas[i]);
                        this.correcao.push(this.corretas[i]);
                        this.erradas.push(this.respostas[i]);
                    }
                }
            }
        },
    
        created() {
            this.respostas = this.$store.state.simulado.resposta
            this.corretas = this.$store.state.simulado.corretas
            console.log('Usuario', this.respostas);
            console.log('Corretas', this.corretas);
            this.getSimuladoPerId(this.$route.params.id),
            this.getAlternatives(this.$route.params.id),
            this.corrigirSimulado()
        },

         filters: {
            formatDate(minuto){
                var hours  = parseInt(minuto / 60);
		        var minutes  = minuto % 60;
                return hours  + ":" + minutes ; 
            }
        }
    }
</script>