import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions:[],
    
  },
  mutations: {
    SET_QUESTION(state,payload) {
      // console.log("msk mtate");
      
      state.questions = payload
    }

  },
  actions: {
    getAll({commit}, payload) {
      axios({
          method: "get",
          url: "http://localhost:3000/home/questions" 
      })
      .then(({data})=>{
          // console.log("xxxxxxx",data.Overflow);
          payload = data.Overflow
          commit("SET_QUESTION", payload)
      })
      .catch(err=>{
          console.log(err.message);        
      })
    }
  }
})
