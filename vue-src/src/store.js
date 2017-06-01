import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  simulado: {
    id: null,
    questoes: [],
    size: null,
    resposta: [],
    corretas: []
  },

  setSimuladoID(id) {
    this.simulado.id = id;
  },

  setSimuladoQuestoes(questoes) {
    this.simulado.questoes = questoes;
    this.setSize();
  },

  setSize() {
    this.simulado.size = this.simulado.questoes.length - 1;
  },

  setResposta(qId, resposta) {
    if (this.simulado.resposta[qId] != undefined)
      this.simulado.resposta[qId] = resposta;
    else
      this.simulado.resposta.push(resposta);

    console.log(this.simulado.resposta)
  },

  setCorreta(correta){
    this.simulado.corretas.push(correta);
    // console.log(this.simulado.corretas);
  }
}

export default new Vuex.Store({
  state
})
