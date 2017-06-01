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
                        <h4><small v-bind:class="{ 'ok': corretas[alt.id] == respostas[alt.id] && respostas[alt.id] == 'a', 'ativa': corretas[alt.id] == 'a', 'inativa': respostas[alt.id] == 'a'}">{{alt.a}}</b></small></h4>
                        <h4><small v-bind:class="{ 'ok': corretas[alt.id] == respostas[alt.id] && respostas[alt.id] == 'b', 'ativa': corretas[alt.id] == 'b', 'inativa': respostas[alt.id] == 'b'}">{{alt.b}}</b></small></h4>
                        <h4><small v-bind:class="{ 'ok': corretas[alt.id] == respostas[alt.id] && respostas[alt.id] == 'c', 'ativa': corretas[alt.id] == 'c', 'inativa': respostas[alt.id] == 'c'}">{{alt.c}}</b></small></h4>
                        <h4><small v-bind:class="{ 'ok': corretas[alt.id] == respostas[alt.id] && respostas[alt.id] == 'd', 'ativa': corretas[alt.id] == 'd', 'inativa': respostas[alt.id] == 'd'}">{{alt.d}}</b></small></h4>
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
                corretas:['c', 'c', 'c', 'a', 'a']
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
            getAlternative(questionId, t, pergunta, id){
                var url = 'http://localhost:3000/alternatives/list/' + questionId;
                    t.$http.get(url)
                    .then(response => {
                        var array = response.body.data;
                        var cont = 0;
                        for(var i=0; i<array.length; i+=4){
                            cont = i;
                            var obj = {
                                id:id,
                                pergunta: pergunta,
                                a: array[cont].alternative,
                                b: array[cont+1].alternative,
                                c: array[cont+2].alternative,
                                d: array[cont+3].alternative
                            }
                            this.alternativesList.push(obj);
                        }
                    }, response => {
                        console.log('error')
                    });
            }
        },
    
        created() {
            this.getSimuladoPerId(this.$route.params.id),
            this.getAlternatives(this.$route.params.id)
            this.respostas = this.$store.state.simulado.resposta
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