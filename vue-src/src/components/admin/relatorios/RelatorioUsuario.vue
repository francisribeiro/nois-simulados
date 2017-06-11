<template>
    <div class="RelatorioUsuario">
    
<!-- RELATORIOS SIMULADOS -->
    <div style="float: left; width: 50%;  height: 500px;">
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
    
    name: 'RelatorioUsuario',

    data() {
        return {
            areas: [],
            teste: false,
            simuladoGraph: {
                chart:{
                    type: "pie" 
                },
                title: {
                    text: "<b>Número de Simulados por Área</b>"
                },
                tooltip: {
                    pointFormat: 'Quantidade: <b>{point.y}</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                             format: '{point.name}<br>Quantidade: <b>{point.y}</b>'
                        },
                        showInLegend: true
                    },
                    series: {
                        cursor: 'pointer',
                        point: {
                            events: {
                                click: function () {
                                    context.getSimuladosArea(this.name)
                                }
                            }
                        }
                    } 
                },
                series: [{
                    name: 'Quantidade',
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
                            name: data.area,
                            y:data.quantidade
                        };
                        t.simuladosArea.push(obj);
                        if(cont == response.data.data.length){
                            t.setDataSimuladoGraph(t);
                        }
                    });
                }, error => {
                    console.log('error')
                })
        },
        setDataSimuladoGraph(t){
            t.simuladoGraph.series[0].data = [];
            t.simuladosArea.forEach(function(data){
                t.simuladoGraph.series[0].data.push(
                    {
                        name:data.name,
                        y:parseInt(data.y)
                    }
                );
            });
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