<template>
    <!-- Fixed navbar -->
    <div class="App">
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                    <router-link class="navbar-brand" to="/home">Nois Simulados</router-link>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-left">
                        <li>
                            <router-link to="/home">Home</router-link>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li v-if="user.authenticated">
                            <router-link to="/dashboard">Dashboard</router-link>
                        </li>
                        <li v-if="user.authenticated">
                            <router-link to="/profile">Perfil</router-link>
                        </li>
                        <li v-if="!user.authenticated">
                            <router-link to="/login">Login</router-link>
                        </li>
                        <li v-if="!user.authenticated">
                            <router-link to="/register">Inscreva-se</router-link>
                        </li>
                        <li v-if="user.authenticated">
                            <a href="#" v-on:click="logout()">sair</a>
                        </li>
                    </ul>
                </div>
                <!--/.nav-collapse -->
            </div>
        </nav>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import auth from '../auth'
    
    export default {
        name: 'app',
        data() {
            return {
                user: auth.user
            }
        },
    
        methods: {
            logout() {
                auth.logout()
                this.$router.push('/login')
            }
        }
    }
</script>