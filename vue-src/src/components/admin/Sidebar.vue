<template>
    <div class="Sidebar">
        <div class="col-md-3">
            <div class="list-group">
                <router-link type="button" to="/dashboard" class="list-group-item active main-color-bg">
                    <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
                </router-link>
                <router-link type="button" to="/simulados" class="list-group-item">
                    <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Simulados
                    <span class="badge">{{numberOfSimulados}}</span>
                </router-link>
                <router-link v-if="user.tipo == 'professor'" type="button" to="/questoes" class="list-group-item">
                    <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Questões
                    <span class="badge">{{numberOfQuestions}}</span>
                </router-link>
                <router-link v-if="user.tipo == 'professor'" type="button" to="/usuarios" class="list-group-item">
                    <span class="glyphicon glyphicon-user" aria-hidden="true"></span> Usuários
                    <span class="badge">{{numberOfUsers}}</span>
                </router-link>
                <router-link type="button" to="/relatorios" class="list-group-item">
                    <span class="glyphicon glyphicon-file" aria-hidden="true"></span> Relatórios
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import auth from '../../auth'

export default {
    name: 'sidebar',

    data() {
        return {
            user: [],
            numberOfQuestions: null,
            numberOfUsers: null,
            numberOfSimulados: null
        }
    },

    methods: {
        getNumberOfQuestions() {
            this.$http.get('http://localhost:3000/questions/q-c').then((response) => {
                this.numberOfQuestions = response.data.data.count
            }, error => {
                console.log('error getNumberOfQuestions')
            })
        },

        getNumberOfUsers() {
            this.$http.get('http://localhost:3000/users/u-c').then((response) => {
                this.numberOfUsers = response.data.data.count
            }, error => {
                console.log('error getNumberOfUsers')
            })
        },

        getNumberOfSimulados() {
            this.$http.get('http://localhost:3000/simulados/s-c').then((response) => {
                this.numberOfSimulados = response.data.data.count
            }, error => {
                console.log('error getNumberOfSimulados')
            })
        },

        getProfile() {
            this.$http.get('http://localhost:3000/users/profile', {
                headers: auth.getAuthHeader()
            }).then((response) => {
                this.user = response.data.data.user
                if(this.user.tipo == 'aluno')
                    this.$router.push('/simulados')
            }, error => {
                console.log('error getProfile')
            })
        }
    },

    created() {
        this.getNumberOfQuestions()
        this.getNumberOfUsers()
        this.getNumberOfSimulados()
        this.getProfile()
    }
}
</script>