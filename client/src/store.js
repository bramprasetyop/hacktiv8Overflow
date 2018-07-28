import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [],
    user: '',
   

  },
  mutations: {
    SET_QUESTION(state, payload) {
      // console.log("msk mtate");

      state.questions = payload
    },
    SET_USER(state, payload) {
      // console.log("msk mtate");

      state.user = payload
    },



  },
  actions: {
    getAll({
      commit
    }, payload) {
      axios({
          method: "get",
          url: "http://localhost:3000/home/questions"
        })
        .then(({
          data
        }) => {
          // console.log("xxxxxxx", data.Overflow);
          payload = data.Overflow
          commit("SET_QUESTION", payload)
          
        })
        .catch(err => {
          console.log(err.message);
        })
    },
    getOneUser({
      commit
    }, payload) {
      axios({
          method: "get",
          url: "http://localhost:3000/home/users",
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(({
          data
        }) => {
          // console.log("xxxxxxx", data.users);
          payload = data.users
          commit("SET_USER", payload)
        })
        .catch(err => {
          console.log(err.message);
        })
    }

  }
})