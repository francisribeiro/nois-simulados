import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  simulado: {
    id: null,
    questoes: []
  },
  setSimuladoID(id){
    this.simulado.id = id;
  },
  setSimuladoQuestoes(questoes) {
    this.simulado.questoes = questoes;
  }
}

export default new Vuex.Store({
  state
})
