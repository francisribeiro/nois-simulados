<template>
    <div class="RelatorioNotaUsuario">
    
<!-- RELATORIOS SIMULADOS -->
    <div style="float: left; width: 100%;  height: 500px;">
        <highcharts :options="simuladoGraph" ref="highcharts"></highcharts>
    </div>
    <div style="float: right; width: 50%; height: 400px; overflow: auto" v-if="clicouSimulado">
        <table class="table table-striped table-hover">
            <tbody>
                <tr>
                    <th>Título</th>
                    <th>Tempo Execução</th>
                    <th>Opção</th>
                </tr>
                <tr valign="middle" v-for="simulado in simulados">
                    <th>{{simulado.title}}</th>
                    <th>{{simulado.executionTime}}</th>
                    <th><router-link id="visualizar" class=" btn btn-success btn-sm" type="button " v-bind:to="{ path: 'simulados/view/' + simulado.id } ">Visualizar</router-link></th>
                </tr>
            </tbody>
        </table>
    </div>

    </div>
</template>

<script>
var context;
import auth from '../../../auth';

export default {
    
    name: 'RelatorioNotaUsuario',

    data() {
        return {
            areas: [],
            teste: false,
            simuladoGraph: {
                chart:{
                    type: "column" 
                },
                title: {
                    text: "<b>Notas por Área</b>"
                },
                tooltip: {
                    pointFormat: 'Nota: <b>{point.y}</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                             format: '{point.name}<br>Nota: <b>{point.y}</b>'
                        },
                        showInLegend: true
                    }
                },
                 yAxis: {
                    min: 0,
                    title: {
                        text: 'Nota'
                    }
                },
                xAxis: {
                    categories: [],
                    title: {
                        text: 'Área'
                    }
                },
                series: [{
                    showInLegend: false,
                    colorByPoint: true,
                    data: []
                }]
            },
            numberOfQuestions: null,
            numberOfUsers: null,
            numberOfSimulados: null,
            simuladoFlagUsuario: false,
            simuladosArea: [],
            clicouSimulado: false,
            simulados: [], 
            user: [],
            graficoProfessor: true
        }
    },
    methods: {
        getNumberOfSimulados() {
            this.$http.get('http://localhost:3000/simulados/s-c').then((response) => {
                this.numberOfSimulados = response.data.data.count
            }, error => {
                console.log('error')
            })
        },
        quantidadeSimuladosArea(user){
            var cont = 0;
            var t = this;
            this.$http.get('http://localhost:3000/simulados/list/usuario/' + user.username)
                .then((response) => {
                    response.data.data.sort(function(a, b){
                        return a.area.localeCompare(b.area);
                    });
                    response.data.data.forEach(function(data){
                        cont++;
                        var obj = {
                            name: data.area
                        };
                        t.simuladosArea.push(obj);
                        if(cont == response.data.data.length){
                            t.setDataSimuladoGraph(t, user);
                        }
                    });
                }, error => {
                    console.log('error')
                })
        },
        setDataSimuladoGraph(t, user){
            t.simuladoGraph.xAxis.categories = [];
            t.simuladoGraph.series[0].data = [];
            
            var array = [];
            var cont = 0;
            var notas = [];
            t.simuladosArea.forEach(function(data){
                cont++;
                if(cont == t.simuladosArea.length){
                    t.getNota(data.name, user, notas, true);
                    array.push(data.name);             
                    t.simuladoGraph.xAxis.categories = array;       
                }else{
                    t.getNota(data.name, user, notas, false);
                    array.push(data.name);
                }                
            });
        },
        getNota(area, user, notas, setarGrafico, array){
            this.$http.get('http://localhost:3000/simulados/nota/usuario/' + user.username + '/area/' + area)
                .then((response) => {
                    if(setarGrafico){
                        notas.push(response.data.data.avg);
                        this.simuladoGraph.series[0].data = notas;
                    }else{
                        notas.push(response.data.data.avg);
                    }
                    
                }, error => {
                    console.log('error')
                })
        },
        getSimuladosArea(area){
            this.questions = []
            this.simulados = []
            this.clicouSimulado = true;
            this.clicouQuestao = false;
            this.$http.get('http://localhost:3000/simulados/area/' + area).then((response) => {
                this.simulados = response.data.data;
            }, error => {
                console.log('error')
            })
        },
        getProfile() {
            this.$http.get('http://localhost:3000/users/profile', {
                headers: auth.getAuthHeader()
            }).then((response) => {
                this.quantidadeSimuladosArea(response.data.data.user)
            }, error => {
                console.log('error getProfile')
            })
        }
    },
    created(){
        context = this
        this.getProfile()
        this.getNumberOfSimulados()
    },
    beforeDestroy: function() {
        this.simuladoGraph.series[0].data = [];
    }
}
</script>