import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Question from './views/Question.vue'
import Answer from './views/Answer.vue'
import AnswerAdd from './views/AddAnswer.vue'
import EditQuestion from './views/EditQuestion.vue'















Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/signup',
      name: 'signup',
      component: Signup
    }, {
      path: '/addquestion',
      name: 'question',
      component: Question
    }, {
      path: '/answers/:id',
      name: 'Answer',
      component: Answer
    },
    {
      path: '/addanswer/:id',
      name: 'AddAnswer',
      component: AnswerAdd
    },
    {
      path: '/editquestion/:id',
      name: 'edit question',
      component: EditQuestion
    }


  ],
  mode: 'history'
})