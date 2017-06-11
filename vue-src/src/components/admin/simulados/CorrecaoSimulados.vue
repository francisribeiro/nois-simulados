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
                    <p v-if="nota >= 70" style="color: #1D18B2"><b>Nota: {{nota | formatNota}}</b></p>
                    <p v-if="nota < 70" style="color: #B21818"><b>Nota: {{nota | formatNota}}</b></p>
                    <p>Tempo de Execução: {{simulado.tempoexecucao}}</p>
                    <br>
                    <div v-for="alt in alternativesList">
                        <p><b>{{alt.pergunta}}</b></p><pre><h4><b>Você: {{acertou[alt.id]}}</b></h4></pre>
                        <h4><small>{{alt.a}}</b></small></h4>
                        <h4><small>{{alt.b}}</b></small></h4>
                        <h4><small>{{alt.c}}</b></small></h4>
                        <h4><small>{{alt.d}}</b></small></h4>
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
        name: 'CorrecaoSimulados',
    
        data() {
            return {
                simulado: [],
                alternativesList: [],
                respostas:[],
                corretas:[],
                correcao: [],
                erradas: [],
                acertou: [],
                quantidadeQuestoes: 0,
                cadaErro: 0,
                nota: 100
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
            corrigirSimulado(){
                var t = this;
                var cont = 0;
                this.alternativesList.forEach(function(data){
                    cont++;
                    
                    if(t.respostas[data.id] == t.corretas[data.id]){
                        console.log('acertou a questão ' + data.id);
                        t.correcao.push(t.respostas[data.id]);
                        t.erradas.push('null');
                        t.updateCorretaBd(data.questionId);
                        t.acertou[data.id] = "Acertou!"
                        if(cont == t.alternativesList.length){
                            t.updateNota();
                        }
                    }else{
                        console.log('errou a questão ' + data.id + '. A correta é a ' + t.corretas[data.id]);
                        t.correcao.push(t.corretas[data.id]);
                        t.erradas.push(t.respostas[data.id]);
                        t.acertou[data.id] = "Errou!"
                        t.nota -= t.cadaErro
                        if(cont == t.alternativesList.length){
                            t.updateNota();
                        }
                    }
                });
            },
            updateCorretaBd(questionId){
                var url = 'http://localhost:3000/questoes-simulado/s/'+ this.$route.params.id 
                            +'/q/' + questionId;
                this.$http.post(url).then((response) => {
                    console.log('Atualizou');
                }, error => {
                    console.log('error')
                })
            },
            updateNota() {
                var url = 'http://localhost:3000/simulados/u-n';
                this.$http.put(url, {
                    id: this.$route.params.id,
                    nota: this.nota
                }).then(response => {
                    console.log('success')
                }, error => {
                    console.log('error')
                })
            }
        },
    
        created() {
            this.respostas = this.$store.state.simulado.resposta
            this.corretas = this.$store.state.simulado.corretas
            this.quantidadeQuestoes = this.corretas.length
            this.cadaErro = 100 / this.quantidadeQuestoes
            this.alternativesList = this.$store.state.simulado.alternativesList;
            this.alternativesList.sort(function(a, b){
                return a.id - b.id;
            });
            console.log('Usuario', this.respostas);
            console.log('Corretas', this.corretas);
            this.getSimuladoPerId(this.$route.params.id),
            this.corrigirSimulado()            
            console.log(this.alternativesList);
        },

         filters: {
            formatDate(minuto){
                var hours  = parseInt(minuto / 60);
		        var minutes  = minuto % 60;
                return hours  + ":" + minutes ; 
            },
            formatNota(nota){
                return parseFloat(nota.toFixed(2))
            }
        }
    }
</script>