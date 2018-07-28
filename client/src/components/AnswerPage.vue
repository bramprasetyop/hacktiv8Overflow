<template>
  <div class="details">
    <div id="comment" class="row">

      <div class="content">

        <div class="row">

          <div class="col s8 left">
            <span>
              <h4 id="titlequestion" style="color:white">{{question.title}}</h4>
            </span>
          </div>

          <div class="col s12 m4 l4 right">

            <div id="oyyy" class="col s8 m6 l6 center">

              <button @click="checkUser" class="waves-effect waves-light btn-small">Add Answer</button>

            </div>

          </div>

        </div>

        <div class="col s10 m10 center">
          <div v-for="answer in answers" :key="answer" class="card white darken-1 ">
            <div class="card-content black-text">

              <p v-html="answer.content" style="text-align:left">{{answer.content}}</p>
            </div>

            <div id="bottom-card" class="card-action black">
              <a @click="upVote(answer._id,answer.userId,user._id)">
                <i class="material-icons">thumb_up</i>
                {{answer.votesUp.length}}</a>
              <a @click="downVote(answer._id,answer.userId,user._id)">
                <i class="material-icons">thumb_down</i>
                {{answer.votesDown.length}}</a>

              <a @click="showModal(answer._id,answer.content)" v-if="answer.userId === user._id" class="waves-effect waves-light ">
                <i class="material-icons left">edit</i>Edit</a>

            </div>

          </div>

        </div>

      </div>
    </div>
    <!-- ======================================================== -->
    <div>
      <modal v-if="show">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-container">
                <span>
                  <h5>Edit Answer</h5>
                </span>
                <VueEditor v-model="editAnswer"> </VueEditor>
              </div>
              <div class="modal-footer">
                <div id="rowmodal" class="row">
                  <div class="col s2 right">
                    <button href="" id="buttonmodal" class="modal-default-button" @click="closeModal(answerId,editAnswer)">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </modal>
    </div>
    <!-- ========================================================== -->
  </div>
</template>
<script>
import axios from 'axios'
import { VueEditor } from 'vue2-editor'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    VueEditor
  },
  data() {
    return {
      question: '',
      answers: [],
      posting: false,
      show: false,
      editAnswer: '',
      answerId: ''
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
  computed: {
    ...mapState(['questions', 'user'])
  },

  methods: {
    ...mapActions(['getAll', 'getOneUser']),
    showModal(id, content) {
      this.editAnswer = content
      this.answerId = id
      this.show = true
    },
    closeModal(idEdit, contentEdit) {
      console.log('==================', idEdit)
      console.log('xxxxxxxxxxxxxxxxxx', contentEdit)

      let obj = {
        content: contentEdit
      }

      axios
        .put(`http://localhost:3000/answers/one/${idEdit}`, obj, {
          headers: { token: localStorage.getItem('token') }
        })
        .then(response => {
          console.log(response)
        })
      this.show = false
      this.getAnswer()
      this.getOneQuestion()
    },

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
          // console.log('xxxxxxxxxxxxxxxxxxxxxx', response.data.Answer)
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
    upVote(idAnswer, userID, idUser) {
      if (userID === idUser) {
        alertify.error('Cannot vote your Answer!')
      } else {
        axios
          .put(
            `http://localhost:3000/answers/${idAnswer}`,
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
    },
    downVote(idAnswer, userID, idUser) {
      if (userID === idUser) {
        alertify.error('Cannot vote your Answer!')
      } else {
        axios
          .put(
            `http://localhost:3000/answers/down/${idAnswer}`,
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
}
</script>

<style scoped>
#oyyy {
  margin-top: 25px;
  /* border: 1px solid black; */
}
</style>














