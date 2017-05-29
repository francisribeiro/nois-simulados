<template>
    <div class="EditAlternativas">
        <header id="header">
            <div class="container">
                <div class="row">
                    <div class="col-md-10">
                        <h1><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Alternativas <small>Controle Suas Alternativas</small></h1>
                    </div>
                </div>
            </div>
            <!-- /.container -->
        </header>
        <section id="breadcrumb">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="active">Dashboard > Questões > Editar Questões > Editar Alternativas </li>
                </ol>
            </div>
        </section>
        <!-- Register -->
        <form class="form-signin form-horizontal well form-size" v-on:submit.prevent="updateAlternatives">
            <fieldset>
                <legend>{{question.question}}</legend>
    
                <label for="inputAlternativeA" class="col-lg-2 control-label">Alternativa A)</label>
                <div class="col-lg-10">
                    <textarea class="form-control" rows="2" id="inputAlternativeA" placeholder="Insira a Alternativa A)" required autofocus v-model="alternativas[0].alternative" name="alternativeA"></textarea>
                </div>
    
                <label for="inputAlternativeB" class="col-lg-2 control-label">Alternativa B)</label>
                <div class="col-lg-10">
                    <textarea class="form-control" rows="2" id="inputAlternativeB" placeholder="Insira a Alternativa B)" required autofocus v-model="alternativas[1].alternative" name="alternativeB"></textarea>
                </div>
    
                <label for="inputAlternativeC" class="col-lg-2 control-label">Alternativa C)</label>
                <div class="col-lg-10">
                    <textarea class="form-control" rows="2" id="inputAlternativeC" placeholder="Insira a Alternativa C)" required autofocus v-model="alternativas[2].alternative" name="alternativeC"></textarea>
                </div>
    
                <label for="inputAlternativeD" class="col-lg-2 control-label">Alternativa D)</label>
                <div class="col-lg-10">
                    <textarea class="form-control" rows="2" id="inputAlternativeD" placeholder="Insira a Alternativa D)" required autofocus v-model="alternativas[3].alternative" name="alternativeD"></textarea>
                </div>
    
                <label for="answer" class="col-lg-2 control-label">Resposta</label>
                <div class="col-lg-10">
                    <!--<span v-for="opt in options">
                                             <input type="radio" name="radiogroup" v-model="picked" v-bind:value="opt.id" >
                                                {{ opt.name }}
                        </span> -->
                        <input type="radio" name="radiogroup" v-model="picked" v-bind:value="options[0].id" >
                        {{ options[0].name }}<br>
                        <input type="radio" name="radiogroup" v-model="picked" v-bind:value="options[1].id" >
                        {{ options[1].name }}<br>
                        <input type="radio" id="correta" name="radiogroup" v-model="picked" v-bind:value="options[2].id" >
                        {{ options[2].name }}<br>
                        <input type="radio" name="radiogroup" v-model="picked" v-bind:value="options[3].id" >
                        {{ options[3].name }}<br><br>
                </div>
    
                <div class="col-lg-10 col-lg-offset-2">
                    <button type="reset" class="btn btn-danger" value="Reset">Limpar Campos</button>
                    <button type="submit" id="finalizarCadastro" class="btn btn-primary" value="Submit">Finalizar Edição</button>
                </div>
            </fieldset>
        </form>
        <!-- /container -->
    </div>
</template>

<script>
    export default {
        name: 'EditAlternativas',
    
        data() {
            return {
                question: [],
                picked: null,
                alternativas: [],
                options: [{
                        id: '0',
                        name: 'A) está correta'
                    },
                    {
                        id: '1',
                        name: 'B) está correta'
                    },
                    {
                        id: '2',
                        name: 'C) está correta'
                    },
                    {
                        id: '3',
                        name: 'D) está correta'
                    }
                ]
            }
        },
    
        methods: {
            updateAlternatives() {
                var count = 0;
    
                this.alternativas.forEach((a) => {
                    if (this.picked == count)
                        a.correct = true
                    else
                        a.correct = false
    
                    this.$http.put(`http://localhost:3000/alternatives/${a.id}`, {
                        alternative: a.alternative,
                        correct: a.correct,
                        questionId: a.questionId
                    }).then(response => {
                        this.$swal({
                            title: 'Sucesso!',
                            text: 'Sua Questão foi Atualizada!',
                            timer: 3000,
                            type: 'success'
                        })
                    }, error => {
                        console.log('error')
                    })
                    count++;
                })
    
                if (count == 4)
                    this.$router.push('/questoes')
            },
    
            getQuestion() {
                this.$http.get(`http://localhost:3000/questions/q-s/${this.$route.params.id}`).then((response) => {
                    this.question = response.data.data
                }, error => {
                    console.log('error')
                })
            },
    
            getAlternatives() {
                this.$http.get(`http://localhost:3000/alternatives/list/${this.$route.params.id}`).then((response) => {
                    this.alternativas = response.data.data
                }, error => {
                    console.log('error')
                })
            }
        },
    
        created() {
            this.getQuestion()
            this.getAlternatives()
        }
    }
</script>



