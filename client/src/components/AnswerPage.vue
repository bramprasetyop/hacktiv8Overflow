<template>
  <div class="details">
    <div id="comment" class="row">

      <div class="content">

        <div class="row">

          <div class="col s8 left">
            <span>
              <h4>{{question.title}}</h4>
            </span>
          </div>

          <div class="col s4 right">

            <div id="oyyy" class="col s6 left">

              <button @click="checkUser" class="waves-effect waves-light btn-small">Add Answer</button>

            </div>

          </div>

        </div>

        <div class="col s10 m10 center">
          <div v-for="answer in answers" :key="answer" class="card white darken-1 ">
            <div class="card-content black-text">

              <p v-html="answer.content" style="text-align:left">{{answer.content}}</p>
            </div>
            <div class="card-action black">
              <a @click="upVote(answer._id)">
                <i class="material-icons">thumb_up</i>
                {{answer.votesUp.length}}</a>
              <a @click="downVote(answer._id)">
                <i class="material-icons">thumb_down</i>
                {{answer.votesDown.length}}</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      question: '',
      answers: [],
      posting: false
    }
  },
  created() {
    this.getOneQuestion()
    this.getAnswer()
    if (localStorage.hasOwnProperty('token')) {
      this.posting = true
    } else {
      this.posting = false
    }
  },

  methods: {
    getOneQuestion() {
      axios
        .get(`http://localhost:3000/home/questions/${this.$route.params.id}`)
        .then(response => {
          // console.log('=============',response.data.Overflow);

          // console.log(response.data.Overflow.content)
          this.question = response.data.Overflow
        })
    },
    getAnswer() {
      axios
        .get(`http://localhost:3000/answers/${this.$route.params.id}`)
        .then(response => {
          console.log('xxxxxxxxxxxxxxxxxxxxxx', response.data.Answer)
          this.answers = response.data.Answer
        })
    },
    checkUser() {
      if (this.posting === false) {
        swal({
          text: 'You must login first',
          icon: 'error'
        })
      } else {
        this.$router.push(`/addanswer/${this.question._id}`)
      }
    },
    upVote(id) {
      axios
        .put(
          `http://localhost:3000/answers/${id}`,
          {},
          {
            headers: {
              token: localStorage.getItem('token')
            }
          }
        )
        .then(response => {
          swal({
            text: 'Thank you',
            icon: 'success'
          })
          console.log('ini masuk upvote', response)
          this.$router.push(`/answers/${this.$route.params.id}`)
          this.getAnswer()
        })
        .catch(err => {
          swal({
            text: 'You must login first',
            icon: 'error'
          })
        })
    },
    downVote(id) {
      axios
        .put(
          `http://localhost:3000/answers/down/${id}`,
          {},
          {
            headers: {
              token: localStorage.getItem('token')
            }
          }
        )
        .then(response => {
          swal({
            text: 'Thank you',
            icon: 'success'
          })
          console.log('ini masuk upvote', response)
          this.$router.push(`/answers/${this.$route.params.id}`)
          this.getAnswer()
        })
        .catch(err => {
          swal({
            text: 'You must login first',
            icon: 'error'
          })
        })
    }
  }
}
</script>

<style scoped>
#oyyy {
  margin-top: 25px;
  /* border: 1px solid black; */
}
</style>














