<template>
    <div class="Profile">
        <header id="header">
            <div class="container">
                <div class="row">
                    <div class="col-md-10">
                        <h1><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Perfil <small>Controle Sua Conta</small></h1>
                    </div>
                </div>
            </div>
            <!-- /.container -->
        </header>
        <section id="breadcrumb">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="active">Dashboard > Perfil</li>
                </ol>
            </div>
        </section>
        <section id="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <!-- Visão Geral do Site -->
                        <form class="form-signin form-horizontal well form-size">
                            <fieldset>
                                <blockquote>
                                    <p>{{user.nome}}</p>
                                    <small><cite><b>Usuário</b>: </cite> <b>{{user.username}}</b></small>
                                    <small><cite><b>Email</b>: </cite> <b>{{user.email}}</b></small>
                                </blockquote>
    
                                <div class="col-lg-10 col-lg-offset-2">
                                    <router-link to="/dashboard" type="button" class="btn btn-success">Voltar</router-link>
                                    <router-link v-bind:to="{ path: 'profile/edit/' + user.username } " type="button" class="btn btn-primary">Editar Perfil</router-link>
                                    <a class="btn btn-danger" type="button" v-on:click="confirmMsg(user.username)">Apagar Conta</a></td>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    
    </div>
</template>

<script>
    import auth from '../../auth'
    
    export default {
        name: 'Profile',
    
        data() {
            return {
                user: []
            }
        },
    
        methods: {
            getProfile() {
                this.$http.get('http://localhost:3000/users/profile', {
                    headers: auth.getAuthHeader()
                }).then((response) => {
                    this.user = response.data.data.user
                }, error => {
                    console.log('error')
                    console.log(auth.getAuthHeader())
                })
            },
    
            deleteAccount(username) {
                this.$http.delete(`http://localhost:3000/users/u/${username}`).then((response) => {
                    this.logout()
                }), error => {
                    console.log('error')
                }
            },
    
            confirmMsg(username) {
                this.$swal({
                    title: 'Você tem certeza?',
                    text: "Você não poderá reverter isso!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sim, exclua isso!'
                }).then(() => {
                    this.deleteAccount(username)
                    this.$swal(
                        'Excluída!',
                        'Sua Conta foi apagada!',
                        'success'
                    )
                })
            },
    
            logout() {
                auth.logout()
                this.$router.push('/home')
            }
        },
    
        created() {
            this.getProfile()
        }
    }
</script>
