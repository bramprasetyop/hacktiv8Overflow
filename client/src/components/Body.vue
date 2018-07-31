<template>
  <div class="details">
    <div id="comment" class="row">
      <div class="content">
        <div class="row col s10 m10 center">

          <div id="bah" class="col s6 right">
            <div class="col s12 m5 l5 right">

              <button @click="checkUser()" class="waves-effect waves-light btn-small">Ask Question</button>

            </div>
          </div>

        </div>
        <div id="bang" class="col s12 m10 l10 center">
          <div v-for="question  in questions" :key="question" class="card white  ">
            <div class="card-content black-text">
              <span style="text-align:left" class="card-title">{{question.title}}</span>
              <p v-html="question.content" style="text-align:left">{{question.content}}</p>
            </div>
            <div id="bottom-card" class="card-action black">

              <router-link :to="`/answers/${question._id}`">
                <a>Answers</a>
              </router-link>
              <a @click="upVote(question._id,question.userId)">
                <i class="material-icons">thumb_up</i>{{question.votesUp.length}}
              </a>
              <a @click="downVote(question._id,question.userId)">
                <i class="material-icons">thumb_down</i>{{question.votesDown.length}}
              </a>
              <router-link :to="`/editquestion/${question._id}`">
                <a v-if="question.userId === user._id">Edit</a>
              </router-link>

              <a @click="deleteQuestion(question._id)" v-if="question.userId === user._id">Delete</a>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      posting: false
    }
  },
  created() {
    this.getAll()
    this.getOneUser()
    if (localStorage.hasOwnProperty('token')) {
      this.posting = true
    } else {
      this.posting = false
      this.$router.push('/login')
      this.$router.push('/signup')
      this.$router.push('/')
      
    }
  },
  watch: {
    $route(to, from) {
      // this.getOneArticle()
    }
  },
  computed: {
    ...mapState(['questions', 'user'])
  },
  methods: {
    ...mapActions(['getAll', 'getOneUser']),

    checkUser() {
      if (this.posting === false) {
        swal({
          text: 'You must login first',
          icon: 'error'
        })
      } else {
        this.$router.push('/addquestion')
      }
    },
    deleteQuestion(id) {
      swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this Question!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          swal('Poof! Your Question has been deleted!', {
            icon: 'success'
          })

          axios
            .delete(`http://localhost:3000/home/questions/${id}`, {
              headers: {
                token: localStorage.getItem('token')
              }
            })
            .then(response => {
              console.log('berhasil', response)
              this.getAll()
            })
        } else {
          swal('Your Question is safe!')
        }
      })
    },
    upVote(id, qid) {
      let obj = {
        votesUp: this.user._id
      }
      console.log('=============', obj)

      if (!this.user._id) {
        alertify.error('You must login first!')
      } else if (this.user._id === qid) {
        alertify.error('Cannot vote your question!')
      } else {
        axios
          .put(`http://localhost:3000/home/questions/up/${id}`, obj, {
            headers: {
              token: localStorage.getItem('token')
            }
          })
          .then(response => {
            console.log('berhasil', response)
            this.$router.push('/')
            this.getAll()
            alertify.success('Thank you!')
          })
      }
    },
    downVote(id, qid) {
      let obj = {
        votesDown: this.user._id
      }
      console.log('=============', obj)

      if (!this.user._id) {
        alertify.error('You must login first!')
      } else if (this.user._id === qid) {
        alertify.error('Cannot vote your question!')
      } else {
        axios
          .put(`http://localhost:3000/home/questions/down/${id}`, obj, {
            headers: {
              token: localStorage.getItem('token')
            }
          })
          .then(response => {
            console.log('berhasil', response)
            this.$router.push('/')
            this.getAll()
            alertify.success('Thank you!')
          })
      }
    }
  }
}
</script>
















