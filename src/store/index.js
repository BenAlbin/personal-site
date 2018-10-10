import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    techItem: null
  },
  getters: {
    selectedTechItem: state => {
      return state.techItem
    }
  },
  mutations: {
    setTechItem (state, tech) {
      state.techItem = tech
    }
  },
  actions: {
    setTechItem ({ commit }, tech) {
      commit('setTechItem', tech)
    }
  }
})
