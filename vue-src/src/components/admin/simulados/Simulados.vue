<template>
    <div class="Simulados">
        <header id="header">
            <div class="container">
                <div class="row">
                    <div class="col-md-10">
                        <h1>
                            <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Simulados
                            <small>Controle Seus Simulados</small>
                        </h1>
                    </div>
    
                    <div class="col-md-2">
                        <div class="dropdown create">
                            <router-link type="button" to="/simulados/add" class="btn btn-danger dropdown-toggle">Iniciar Novo Simulado</router-link>
                        </div>
                    </div>
    
                </div>
            </div>
            <!-- /.container -->
        </header>
        <section id="breadcrumb">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="active">Dashboard > Simulados</li>
                </ol>
            </div>
        </section>
        <section id="main">
            <div class="container">
                <div class="row">
                    <sidebar></sidebar>
                    <div class="col-md-9">
                        <!-- Visão Geral do Site -->
                        <div class="panel panel-default">
                            <div class="panel-heading main-color-bg">
                                <h3 class="panel-title">Simulados</h3>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <input class="form-control" v-model="filterInput" type="text" placeholder="Procurar por Simulado...">
                                    </div>
                                </div>
                                <br>
                                <table class="table table-striped table-hover">
                                    <tbody>
                                        <tr>
                                            <th>Título do Simulado</th>
                                            <th>Tempo de Execução</th>
                                            <th>Opção</th>
                                        </tr>
                                        <tr valign="middle" v-for="simulado in filterBy(simulados, filterInput)">
                                            <td>{{simulado.title}}</td>
                                            <td>
                                                <b>{{simulado.executionTime | formatDate}}</b>
                                            </td>
    
                                            <td>
                                                <router-link class=" btn btn-success btn-sm" type="button " v-bind:to="{ path: 'simulados/view/' + simulado.id } ">Visualizar</router-link>
                                                <a class="btn btn-danger btn-sm" type="button " v-on:click="confirmMsg(simulado.id) ">Apagar</a>
                                            </td>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    </div>
</template>

<script>
import auth from '../../../auth';

export default {
    name: 'Simulados',

    data() {
        return {
            simulados: [],
            filterInput: '',
            user: ''
        }
    },

    methods: {
        getAllSimulados() {
            var url = 'http://localhost:3000/simulados/usuario/' + this.user;
            console.log(url);
            this.$http.get(url).then((response) => {
                this.simulados = response.data.data
            }, error => {
                console.log('error')
            })
        },

        filterBy(list, value) {
            value = value.toLowerCase()
            return list.filter(function (simulado) {
                return simulado.title.toLowerCase().indexOf(value) > -1;
            });
        },
        getProfile() {
            this.$http.get('http://localhost:3000/users/profile', {
                headers: auth.getAuthHeader()
            }).then((response) => {
                this.user = response.data.data.user.nome
            }, error => {
                console.log('error')
            })
        },

        deleteSimulado(simuladoId) {
            this.$http.delete(`http://localhost:3000/simulados/${simuladoId}`).then((response) => {
            }), error => {
                console.log('error')
            }
        },

        confirmMsg(simuladoId) {
            this.$swal({
                title: 'Você tem certeza?',
                text: "Você não poderá reverter isso!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, exclua isso!'
            }).then(() => {
                this.deleteSimulado(simuladoId)
                this.$swal(
                    'Excluído!',
                    'Seu Simulado foi Apagado!',
                    'success'
                )
            })
        }
    },

    created() {
        this.getProfile(),
        this.getAllSimulados()
    },

    updated() {
        this.getProfile(),
        this.getAllSimulados()
    },

    filters: {
        formatDate(minuto) {
            var hours = parseInt(minuto / 60);
            var minutes = minuto % 60;
            return hours + ":" + minutes;
        }
    }
}
</script>
