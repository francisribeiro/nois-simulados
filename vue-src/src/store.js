import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  simulado: {
    id: null,
    questoes: [],
    size: null,
    resposta: [],
    corretas: [],
    alternativesList: []
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
  },

  setCorreta(correta){
    this.simulado.corretas.push(correta);
  },

  setAlternativeList(lista){
    this.simulado.alternativesList = lista;
  }
}

export default new Vuex.Store({
  state
})
