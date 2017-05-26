<template>
    <div class="EditUsuarios">
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
                    <li class="active">Dashboard > Perfil > Editar Perfil</li>
                </ol>
            </div>
        </section>
        <form class="form-signin form-horizontal well form-size" v-on:submit.prevent="updateUser">
            <fieldset>
                <legend>Editar Perfil</legend>
    
                <label for="inputArea" class="col-lg-2 control-label">Nome</label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" id="inputArea" placeholder="Insira seu Nome" required v-model="user.nome" name="area">
                </div>
    
                <label for="inputArea" class="col-lg-2 control-label">Email</label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" id="inputArea" placeholder="Insira seu Email" required v-model="user.email" name="area">
                </div>
    
    
                <div class="col-lg-10 col-lg-offset-2">
                    <button v-on:click="goBack" class="btn btn-success">Voltar</button>
                    <button type="submit" value="Submit" class="btn btn-primary">Salvar Alterações</button>
                </div>
            </fieldset>
        </form>
        <!-- /container -->
    
    </div>
</template>

<script>
    import auth from '../../../auth'
    
    export default {
        name: 'EditUsuarios',
    
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
                })
            },
    
            updateUser() {
                let newUser = {
                    name: this.user.nome,
                    email: this.user.email,
                    username: this.user.username,
                    password: this.user.password,
                    type: this.user.type
                }
    
                this.$http.put('http://localhost:3000/users/', newUser).then((response) => {
                    this.$router.push('/profile')
                    this.$swal({
                        title: 'Sucesso!',
                        text: 'Seu Perfil foi Atualizado!',
                        timer: 3000,
                        type: 'success'
                    })
                }, error => {
                    console.log('error')
                })
            },
    
            goBack() {
                this.$router.push('/profile')
            }
        },
    
        created() {
            this.getProfile()
        }
    }
</script>