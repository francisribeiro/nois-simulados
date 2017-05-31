import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  simulado: {
    id: null,
    questoes: [],
    size:null
  },

  setSimuladoID(id){
    this.simulado.id = id;
  },
  
  setSimuladoQuestoes(questoes) {
    this.simulado.questoes = questoes;
    this.setSize();
  },

  setSize() {
    this.simulado.size = this.simulado.questoes.length - 1;
  }
}

export default new Vuex.Store({
  state
})
