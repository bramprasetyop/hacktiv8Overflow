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

              <a v-if="question.userId === user._id">Edit</a>

              <a v-if="question.userId === user._id">Delete</a>

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
    }
  }
}
</script>
















