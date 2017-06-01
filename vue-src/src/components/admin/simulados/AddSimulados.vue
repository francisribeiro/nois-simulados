<template>
    <div class="AddSimulados">
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
                    <li class="active">Dashboard > Simulado > Adicionar Simulado</li>
                </ol>
            </div>
        </section>
        <form class="form-signin form-horizontal well form-size" v-on:submit.prevent="addSimulado">
            <fieldset>
                <legend>Iniciar Novo Simulado</legend>
    
                <label for="inputTitle" class="col-lg-2 control-label">Título</label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" id="inputTitle" placeholder="Insira o título" required v-model="novoSimulado.title" name="title">
                </div>
    
                <label for="inputAreas" class="col-lg-2 control-label">Área de Conhecimento</label>
                <div class="col-lg-10">
                    <select class="form-control" id="inputAreas" required v-model="area" name="area" required @change="quantidadeQuestoesArea()">
                        <option value="" disabled hidden>Qual a área de conhecimento?</option>
                        <option v-for="a in areas">{{a}}</option>
                    </select>
                </div>
    
                <label for="inputQuestoesCadastradas" class="col-lg-2 control-label" v-if="questoesCadastradas != null">Questões Cadastradas</label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" v-if="questoesCadastradas != null" id="inputQuestoesCadastradas" required v-model="questoesCadastradas" name="questoesCadastradas" disabled>
                </div>
    
                <label for="inputLimit" class="col-lg-2 control-label" v-if="questoesCadastradas != null">Questões Desejada</label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" id="inputLimit" v-if="questoesCadastradas != null" required v-model="limit" name="limit">
                </div>
    
                <div class="col-lg-10 col-lg-offset-2">
                    <button type="reset" class="btn btn-danger" value="Reset">Limpar Campos</button>
                    <button type="submit" class="btn btn-primary" value="Submit" v-if="limit <= questoesCadastradas">Iniciar Simulado</button>
                    <button type="submit" class="btn btn-primary" value="Submit" v-else disabled>Iniciar Simulado</button>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
import auth from '../../../auth';

export default {
    name: 'addSimulados',
    data() {
        return {
            novoSimulado: {
                user: '',
                title: ''
            },
            area: '',
            limit: '5',
            questoesCadastradas: null,
            areas: []
        }
    },
    methods: {
        addSimulado: function () {
            var url = 'http://localhost:3000/simulados/area/' + this.area + '/limite/' + this.limit;
            this.$http.post(url, this.novoSimulado).then(response => {
                var simulado = response.data.data[0].id;
                var questoesSimulado = response.data.data[1].questoes;

                this.$store.state.setSimuladoID(simulado);
                this.$store.state.setSimuladoQuestoes(questoesSimulado);

                this.$router.push(`/simulados/iniciar/${simulado}/0`)
            }, response => {
                console.log('error')
            });
        },
        getProfile() {
            this.$http.get('http://localhost:3000/users/profile', {
                headers: auth.getAuthHeader()
            }).then((response) => {
                this.novoSimulado.user = response.data.data.user.nome
            }, error => {
                console.log('error')
                console.log(auth.getAuthHeader())
            })
        },
        getAreas() {
            this.$http.get('http://localhost:3000/questions/list-area')
                .then((response) => {
                    this.areas = response.data.data
                    this.areas.sort()
                }, error => {
                    console.log('error')
                })
        },
        quantidadeQuestoesArea() {
            this.$http.get('http://localhost:3000/questions/count-questions-area/' + this.area)
                .then((response) => {
                    this.questoesCadastradas = response.data.data.count
                }, error => {
                    console.log('error')
                })
        }
    },
    created() {
        this.getProfile()
        this.getAreas()
    }
}
</script>