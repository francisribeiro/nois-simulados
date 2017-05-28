<template>
    <div class="IniciarSimulado">
        <header id="header">
            <div class="container">
                <div class="row">
                    <div class="col-md-10">
                        <h1><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Simulado <small>Controle Seu Simulado</small></h1>
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
        <div v-for="q in alternativesList">
            <h4><b>{{q.pergunta}}</b></h4>
            <h4>a){{q.a}}</h4>
            <h4>b){{q.b}}</h4>
            <h4>c){{q.c}}</h4>
            <h4>d){{q.d}}</h4>            
            <br>
        </div>
        
    </div>
</template>


<script>

export default {
    name: 'iniciarSimulado',
    data(){
        return {
            alternativesList: []
        }
    },
    methods: {
        getQuestions(simulado, questoes){
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
    created(){
        this.getQuestions(this.$store.state.simulado.id, this.$store.state.simulado.questoes);        
    }
    
  }
</script>