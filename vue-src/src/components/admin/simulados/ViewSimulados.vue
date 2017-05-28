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
                        <small>{{alt.a}}</b></small>
                        <small>{{alt.b}}</b></small>
                        <small>{{alt.c}}</b></small>
                        <small>{{alt.d}}</b></small>
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
                alternativesList: []
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
            questions.forEach(function(q){
                t.getPergunta(q, t)
            });
        },
            getPergunta(questionId, t){
                var url = 'http://localhost:3000/questions/pergunta/' + questionId;
                t.$http.get(url)
                .then((response) => {
                    t.getAlternative(questionId, t, response.body.data);
                }, error => {
                    console.log('error')
                });
                
            },
            getAlternative(questionId, t, pergunta){
                var url = 'http://localhost:3000/alternatives/list/' + questionId;
                    t.$http.get(url)
                    .then(response => {
                        var array = response.body.data;
                        var cont = 0;
                        for(var i=0; i<array.length; i+=4){
                            cont = i;
                            var obj = {
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