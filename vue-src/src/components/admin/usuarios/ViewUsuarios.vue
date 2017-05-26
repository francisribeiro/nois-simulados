<template>
    <div class="ViewUsuarios">
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
                    <li class="active">Dashboard > Usuários > Visualizar Usuários</li>
                </ol>
            </div>
        </section>
        <form class="form-signin form-horizontal well form-size">
            <fieldset>
                <blockquote>
                    <p>{{user.name}}</p>
                    <small><cite><b>Usuário</b>: </cite> <b>{{user.username}}</b></small>
                    <small><cite><b>Email</b>: </cite> <b>{{user.email}}</b></small>    
                </blockquote>
    
                <div class="col-lg-10 col-lg-offset-2">
                    <router-link to="/usuarios" type="button" class="btn btn-success">Voltar</router-link>
                </div>
            </fieldset>
        </form>
        <!-- /container -->
    
    </div>
</template>

<script>
    export default {
        name: 'ViewUsuarios',
    
        data() {
            return {
                user: [],
                alternativas: []
            }
        },
    
        methods: {
            getUser(username) {
                this.$http.get(`http://localhost:3000/users/u/${username}`).then((response) => {
                    this.user = response.data.data
                    console.log(this.user)
                }, error => {
                    console.log('error')
                })
            }
        },
    
        created() {
            this.getUser(this.$route.params.username)
        }
    }
</script>