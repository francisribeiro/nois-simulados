<template>
    <div class="AddQuestoes">
        <header id="header">
            <div class="container">
                <div class="row">
                    <div class="col-md-10">
                        <h1><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Questões <small>Controle Suas Questões</small></h1>
                    </div>
                </div>
            </div>
            <!-- /.container -->
        </header>
        <section id="breadcrumb">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="active">Dashboard > Questões > Adicionar Questões</li>
                </ol>
            </div>
        </section>
        <form class="form-signin form-horizontal well form-size" v-on:submit.prevent="addQuestion">
            <fieldset>
                <legend>Cadastrar Nova Questão</legend>
    
                <label for="inputQuestion" class="col-lg-2 control-label">Questão</label>
                <div class="col-lg-10">
                    <textarea class="form-control" rows="3" id="inputQuestion" placeholder="Insira a Questão" required autofocus v-model="newQuestion.question" name="question"></textarea>
                </div>
    
                <label for="inputArea" class="col-lg-2 control-label">Área</label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" id="inputArea" placeholder="Insira a Área de Conhecimento" required v-model="newQuestion.area" name="area">
                </div>
    
                <label for="inputStatus" class="col-lg-2 control-label">Status</label>
                <div class="col-lg-10">
                    <select class="form-control" id="inputStatus" required v-model="newQuestion.status" name="status" required>
                        <option value="" disabled hidden>Qual o status da Questão?</option>
                        <option v-for="status in options" v-bind:value="status.id">{{status.name}}</option>
                    </select>
                </div>
    
                <label for="inputFeedback" class="col-lg-2 control-label">Feedback</label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" id="inputUsuario" placeholder="Qual o feedback da Questão?" required v-model="newQuestion.feedback" name="feedback">
                </div>
        
                <div class="col-lg-10 col-lg-offset-2">
                    <button type="reset" class="btn btn-lg btn-danger" value="Reset">Limpar Campos</button>
                    <button type="submit" class="btn btn-lg btn-primary" value="Submit">Continuar Cadastro</button>
                </div>
            </fieldset>
        </form>
        <!-- /container -->
    
    </div>
</template>

<script>
    export default {
        name: 'addQuestoes',
    data() {
      return {
         newQuestion: {
          status: '',
          timesAppeared: 0,
          area: '',
          feedback: '',
          question: ''
        },
        
        options: [
            {id: 'ativa', name: 'Ativa'},
            {id: 'inativa', name: 'Inativa'}
        ]
      }
    },
    methods: {
      addQuestion: function() { 
        this.$http.post('http://localhost:3000/questions', this.newQuestion).then(response => {
          this.$router.push('/alternativas/add')
        }, response => {
          console.log('error')
        });
      }
    }
  }
</script>