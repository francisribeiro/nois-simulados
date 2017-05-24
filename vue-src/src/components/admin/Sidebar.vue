<template>
    <div class="Sidebar">
        <div class="col-md-3">
            <div class="list-group">
                <router-link type="button" to="/dashboard" class="list-group-item active main-color-bg">
                    <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
                </router-link>
                <router-link type="button" to="/simulados" class="list-group-item">
                    <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Simulados
                    <span class="badge">12</span>
                </router-link>
                <router-link type="button" to="/questoes" class="list-group-item">
                    <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Questões
                    <span class="badge">33</span>
                </router-link>
                <router-link type="button" to="/usuarios" class="list-group-item">
                    <span class="glyphicon glyphicon-user" aria-hidden="true"></span> Usuários
                    <span class="badge">2</span>
                </router-link>
                <router-link type="button" to="/relatorios" class="list-group-item">
                    <span class="glyphicon glyphicon-user" aria-hidden="true"></span> Relatórios
                    <span class="badge">12007</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'sidebar',
        data() {
            return {
    
            }
        }
    }
</script>