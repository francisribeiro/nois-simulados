<template>
    <div class="CorrecaoSimulados">
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
                    <p>Tempo de Execução: {{simulado.tempoexecucao}}</p>
                    <br>
                    <div v-for="alt in alternativesList">
                        <p><b>{{alt.pergunta}}</b></p>
                        <h4><small>{{alt.a}}</b></small></h4>
                        <h4><small>{{alt.b}}</b></small></h4>
                        <h4><small>{{alt.c}}</b></small></h4>
                        <h4><small>{{alt.d}}</b></small></h4>
                        <pre><b>Feedback do Professor:</b><br>{{alt.feedback}}</pre>
                        <div v-if="respostas[alt.id]">
                            <pre><h4><b>Você acertou!</b></h4></pre>
                        </div>
                        <div v-else>
                            <pre><h4><b>Você errou!</b></h4></pre>
                        </div>
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
        name: 'CorrecaoSimulados',
    
        data() {
            return {
                simulado: [],
                alternativesList: [],
                respostas:[],
                corretas:[],
                correcao: [],
                erradas: [],
                contador: 0
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
            getQuestions(simuladoID){
                this.$http.get('http://localhost:3000/questoes-simulado/s/' + simuladoID).then((response) => {
                    this.generateResponse(response.data.data);
                }, error => {
                    console.log('error')
                })
            },
            generateResponse(array) {
                var t = this;
                var id = 0;
                var cont = 0;
                
                for(var i = 0; i < array.length; i++){
                    cont++;
                    if(cont == array.length){
                        t.getPergunta(array[i], t, id, array.length)
                        id++;
                        t.getRespostasUsuario(array);
                    } else{
                        t.getPergunta(array[i], t, id, array.length)
                        id++;
                    }
                 }
                                
            },
            sortAlternativeList(){
                this.alternativesList.sort(function(a, b){
                        return a.id - b.id;
                });
                console.log(this.alternativesList);
                this.getRespostasUsuario();
            },
            getRespostasUsuario(array){
                var t = this;
                array.forEach(function(data){
                    t.respostas.push(data.correta);
                });
            },
            getPergunta(questaoSimulado, t, id, qtdQuestoes) {
                var url = 'http://localhost:3000/questions/pergunta/' + questaoSimulado.questao;
                t.$http.get(url)
                    .then((response) => {
                        t.getAlternative(questaoSimulado, t, response.body.data, id, qtdQuestoes);
                    }, error => {
                        console.log('error')
                    });

            },
            getAlternative(questaoSimulado, t, data, id, qtdQuestoes) {
                var url = 'http://localhost:3000/alternatives/list/' + questaoSimulado.questao;
                t.$http.get(url)
                    .then(response => {
                        var array = response.body.data;
                        var cont = 0;
                        this.contador++;
                        for (var i = 0; i < array.length; i += 4) {
                            cont = i;
                            var obj = {
                                id: id,
                                pergunta: data.pergunta,
                                a: array[cont].alternative,
                                b: array[cont + 1].alternative,
                                c: array[cont + 2].alternative,
                                d: array[cont + 3].alternative,
                                feedback: data.feedback,
                                questionId: questaoSimulado.questao,
                                correta: t.getCorrect(array)
                            }                     
                            if(this.contador == qtdQuestoes){
                                t.alternativesList.push(obj);
                                t.corrigirSimulado();
                            }else{
                                t.alternativesList.push(obj);
                            }
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
            corrigirSimulado(){
                var t = this;
                this.alternativesList.forEach(function(data){
                    t.corretas.push(data.correta);
                });
                
                this.alternativesList.forEach(function(data){
                    if(t.respostas[data.id]){
                        console.log('acertou a questão ' + data.id);
                        // t.correcao.push(t.corretas[data.id]);
                        // t.erradas.push('null');
                    }else{
                        console.log('errou a questão ' + data.id + '. A correta é a ' + t.corretas[data.id]);
                        // t.correcao.push(t.corretas[data.id]);
                        // t.erradas.push(t.respostas[data.id]);
                    }
                });
            }
        },
    
        created() {
            
            this.alternativesList.sort(function(a, b){
                return a.id - b.id;
            });
            
            this.getSimuladoPerId(this.$route.params.id)
            this.getQuestions(this.$route.params.id)
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