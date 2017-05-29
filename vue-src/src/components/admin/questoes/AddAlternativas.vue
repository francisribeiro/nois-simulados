<template>
    <div class="AddAlternativas">
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
                    <li class="active">Dashboard > Questões > Adicionar Questões > Adicionar Alternativas </li>
                </ol>
            </div>
        </section>
        <!-- Register -->
        <form class="form-signin form-horizontal well form-size" v-on:submit.prevent="addAlternatives">
            <fieldset>
                <legend>{{question.question}}</legend>
    
                <label for="inputAlternativeA" class="col-lg-2 control-label">Alternativa A)</label>
                <div class="col-lg-10">
                    <textarea class="form-control" rows="2" id="inputAlternativeA" placeholder="Insira a Alternativa A)" required autofocus v-model="alternativas[0].letra" name="alternativeA"></textarea>
                </div>
    
                <label for="inputAlternativeB" class="col-lg-2 control-label">Alternativa B)</label>
                <div class="col-lg-10">
                    <textarea class="form-control" rows="2" id="inputAlternativeB" placeholder="Insira a Alternativa B)" required autofocus v-model="alternativas[1].letra" name="alternativeB"></textarea>
                </div>
    
                <label for="inputAlternativeC" class="col-lg-2 control-label">Alternativa C)</label>
                <div class="col-lg-10">
                    <textarea class="form-control" rows="2" id="inputAlternativeC" placeholder="Insira a Alternativa C)" required autofocus v-model="alternativas[2].letra" name="alternativeC"></textarea>
                </div>
    
                <label for="inputAlternativeD" class="col-lg-2 control-label">Alternativa D)</label>
                <div class="col-lg-10">
                    <textarea class="form-control" rows="2" id="inputAlternativeD" placeholder="Insira a Alternativa D)" required autofocus v-model="alternativas[3].letra" name="alternativeD"></textarea>
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
                    <button type="submit" id="finalizarCadastro" class="btn btn-primary" value="Submit">Finalizar Cadastro</button>
                </div>
            </fieldset>
        </form>
        <!-- /container -->
    </div>
</template>

<script>
    export default {
        name: 'AddAlternativas',
    
        data() {
            return {
                question: [],
                questao: null,
                picked: null,
                alternativas: [{
                        letra: '',
                        correta: false
                    },
                    {
                        letra: '',
                        correta: false
                    },
                    {
                        letra: '',
                        correta: false
                    },
                    {
                        letra: '',
                        correta: false
                    }
                ],
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
            addAlternatives() {
                this.alternativas[this.picked].correta = true
                this.$http.post('http://localhost:3000/alternatives', {
                    alternativas: this.alternativas,
                    questao: this.questao
                }).then(response => {
                    this.$router.push('/questoes')
                    this.$swal({
                        title: 'Sucesso!',
                        text: 'A Questão foi Cadastrada!',
                        timer: 3000,
                        type: 'success'
                    })
                }, error => {
                    console.log('error')
                })
            },
    
            getLastQuestion() {
                this.$http.get('http://localhost:3000/questions/q-l-id').then((response) => {
                    this.question = response.data.data
                    this.questao = this.question.id
                }, error => {
                    console.log('error')
                });
            }
        },
    
        created() {
            this.getLastQuestion()
        }
    }
</script>

