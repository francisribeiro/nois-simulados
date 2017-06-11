<template>
    <div class="Relatorios">
        <header id="header">
            <div class="container">
                <div class="row">
                    <div class="col-md-10">
                        <h1><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Relatórios <small>Visualize seus Relatórios</small></h1>
                    </div>
                </div>
            </div>
            <!-- /.container -->
        </header>
        <section id="breadcrumb">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="active">Dashboard > Relatórios > Visualizar Relatórios</li>
                </ol>
            </div>
        </section>

    <section id="main">
      <div class="container">
        <div class="row">
          <div>
            <!-- Visão Geral do Site -->
            <div class="panel panel-default">
              <div class="panel-heading main-color-bg">
                <h3 class="panel-title">Visão Geral do Sistema</h3>
              </div>
              <div class="panel-body">
                <div class="col-md-4" v-on:click="relatorioSimulado()">
                  <div class="well dash-box">
                    <h2>
                      <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span> {{numberOfSimulados}}
                    </h2>
                    <h4>Simulados</h4>
                  </div>
                </div>
                <div class="col-md-4" v-on:click="relatorioQuestao()" v-if="relatorioProfessor">
                  <div class="well dash-box">
                    <h2>
                      <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> {{numberOfQuestions}}
                    </h2>
                    <h4>Questões</h4>
                  </div>
                </div>
                <div class="col-md-4" v-if="relatorioProfessor">
                  <div class="well dash-box">
                    <h2>
                      <span class="glyphicon glyphicon-user" aria-hidden="true"></span> {{numberOfUsers}}
                    </h2>
                    <h4>Usuários</h4>
                  </div>
                </div>
                
                <div class="col-md-4" v-on:click="relatorioNotaUsuario()" v-if="!relatorioProfessor">
                  <div class="well dash-box">
                    <h2>
                      <span class="glyphicon glyphicon-education" aria-hidden="true"></span> Nota
                    </h2>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- RELATORIOS SIMULADOS -->
    <div v-if="simuladoFlag">
        <div v-if="relatorioProfessor">
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

        <div v-if="!relatorioProfessor">
            <RelatorioUsuario></RelatorioUsuario>
        </div>
    </div>

    <!-- RELATORIO QUESTOES -->
    <div v-if="questaoFlag">
        <div style="float: left; width: 50%;  height: 500px;">
            <highcharts :options="questaoGraph" ref="highcharts"></highcharts>
        </div>
        <div style="float: right; width: 50%; height: 400px; overflow: auto" v-if="clicouQuestao">
            <table class="table table-striped table-hover">
                <tbody>
                    <tr>
                        <th>Questão</th>
                        <th>Status</th>
                        <th>Aparições</th>
                        <th>Opção</th>
                    </tr>
                    <tr valign="middle" v-for="question in questions">
                        <th>{{question.question}}</th>
                        <th>{{question.status}}</th>
                        <th>{{question.timesAppeared}}</th>
                        <th><router-link id="visualizar" class=" btn btn-success btn-sm" type="button " v-bind:to="{ path: 'questoes/view/' + question.id } ">Visualizar</router-link></th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div v-if="clicouNotaUsuario">
            <RelatorioNotaUsuario></RelatorioNotaUsuario>
        </div>

    </div>
</template>

<script>
var context
import auth from '../../../auth';
export default {
    
    name: 'Relatorios',

    data() {
        return {
            areas: [],
            questoesArea: [],
            teste: false,
            questaoGraph: {
                chart:{
                    type: "pie" 
                },
                title: {
                    text: "<b>Número de Questões por Área</b>"
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
                                    context.getQuestionsArea(this.name)
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
            questaoFlag: false,
            clicouQuestao: false,
            questions: [],
            simuladoFlag: false,
            simuladosArea: [],
            clicouSimulado: false,
            simulados: [],
            relatorioProfessor: true,
            clicouNotaUsuario: false
        }
    },
    methods: {
        getAreas() {
            this.$http.get('http://localhost:3000/questions/list-area')
                .then((response) => {
                    this.areas = response.data.data
                    this.areas.sort()
                    this.quantidadeQuestoesArea(this)
                }, error => {
                    console.log('error')
                })
        },
        quantidadeQuestoesArea(t) {
            var cont = 0;
            t.areas.forEach(function(area){
                t.$http.get('http://localhost:3000/questions/count-questions-area/' + area)
                    .then((response) => {
                        cont++;
                        var obj = {
                            name:area,
                            y:response.data.data.count
                        };
                        t.questoesArea.push(obj);
                        if(cont == t.areas.length){
                            t.setDataQuestaoGraph(t);
                        }
                    }, error => {
                        console.log('error')
                    })
            });
        },
        setDataQuestaoGraph(t){
            t.questaoGraph.series[0].data = [];
            t.questoesArea.sort(function(a, b){
                return a.name.localeCompare(b.name);
            });
            t.questoesArea.forEach(function(data){
                t.questaoGraph.series[0].data.push(
                    {
                        name:data.name,
                        y:parseInt(data.y)
                    }
                );
            });
        },
        getNumberOfQuestions() {
            this.$http.get('http://localhost:3000/questions/q-c').then((response) => {
                this.numberOfQuestions = response.data.data.count
            }, error => {
                console.log('error')
            })
        },
        getNumberOfUsers() {
            this.$http.get('http://localhost:3000/users/u-c').then((response) => {
                this.numberOfUsers = response.data.data.count
            }, error => {
                console.log('error')
            })
        },
        getNumberOfSimulados() {
            this.$http.get('http://localhost:3000/simulados/s-c').then((response) => {
                this.numberOfSimulados = response.data.data.count
            }, error => {
                console.log('error')
            })
        },
        relatorioQuestao(){
            this.questaoFlag = true;
            this.simuladoFlag = false;
        },
        relatorioNotaUsuario(){
            this.questaoFlag = false;
            this.simuladoFlag = false;
            this.clicouNotaUsuario = true;
        },
        getQuestionsArea(area) {
            this.questions = []
            this.simulados = []
            this.clicouQuestao = true;
            this.clicouSimulado = false;
             this.$http.get('http://localhost:3000/questions/area/' + area).then((response) => {
                this.questions = response.data.data;
            }, error => {
                console.log('error')
            })
        },
        relatorioSimulado(){
            this.questaoFlag = false;
            this.simuladoFlag = true;
        },
        quantidadeSimuladosArea(){
            var cont = 0;
            var t = this;
            this.$http.get('http://localhost:3000/simulados/list/area')
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
                if(response.data.data.user.tipo == 'aluno')
                    this.relatorioProfessor = false
            }, error => {
                console.log('error getProfile')
            })
        }
    },
    created(){
        context = this
        this.getProfile()
        this.getNumberOfQuestions()
        this.getNumberOfUsers()
        this.getNumberOfSimulados()
        this.getAreas()
        this.quantidadeSimuladosArea()
    },
    beforeDestroy: function() {
            this.questaoGraph.series[0].data = [];
            this.simuladoGraph.series[0].data = [];
    }
}
</script>