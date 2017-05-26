<template>
    <div class="Usuarios">
        <header id="header">
            <div class="container">
                <div class="row">
                    <div class="col-md-10">
                        <h1><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Usuários <small>Controle Seus Usuários</small></h1>
                    </div>
                </div>
            </div>
            <!-- /.container -->
        </header>
        <section id="breadcrumb">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="active">Dashboard > Usuários</li>
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
                                <h3 class="panel-title">Usuários</h3>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <input class="form-control" v-model="filterInput" type="text" placeholder="Procurar por Usuários...">
                                    </div>
                                </div>
                                <br>
                                <table class="table table-striped table-hover">
                                    <tbody>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Tipo</th>
                                            <th>Opções</th>
                                        </tr>
                                        <tr v-for="user in filterBy(users, filterInput)">
                                            <td>{{user.name}}</td>
                                            <td><b>{{user.type}}</b></td>
                                            <td>
                                                <router-link class="btn btn-success" type="button" v-bind:to="{ path: 'usuarios/view/' + user.username }">Visualizar</router-link>
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
    export default {
        name: 'Usuarios',
    
        data() {
            return {
                users: [],
                filterInput: ''
            }
        },
    
        methods: {
            getAllUsers() {
                this.$http.get('http://localhost:3000/users/list').then((response) => {
                    this.users = response.data.data
                }, error => {
                    console.log('error')
                })
            },
    
            filterBy(list, value) {
                value = value.toLowerCase()
                return list.filter(function(user) {
                    return user.name.indexOf(value) > -1;
                });
            }
        },
    
        created() {
            this.getAllUsers()
        }
    }
</script>
