<template>

  <div class="row ">
    <div class="col s6 m2 l2">
      <button @click="back" class="waves-effect waves-light btn-small">back</button>

    </div>

    <div v-if="question._id === $route.params.id" v-for="question in questions" :key="question" id="yaki" class="col s12 m12 l12 center">
      <span>Title</span>
      <input v-model="question.title" type="text">
      <span>Question</span>
      <br>
      <VueEditor v-model="question.content"></VueEditor>
      <div id="submittt" class="col s6 m3 l3 right">
        <button @click="editQuestion(question._id,question.content,question.title)" class="waves-effect waves-light btn-small">Edit</button>
      </div>
    </div>

  </div>

</template>


<script>
import { VueEditor } from 'vue2-editor'
import axios from 'axios'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    VueEditor
  },
  data() {
    return {}
  },
  created() {
    this.getAll()
  },
  computed: {
    ...mapState(['questions', 'question'])
  },
  methods: {
    ...mapActions(['getAll']),
    back() {
      this.$router.push('/')
    },
    editQuestion(id, questionUpdate, titleUpdate) {
      // console.log('===============',title);
      // console.log('xxxxxxxxxxxxxxxxxxx', question)

      let obj = {
        title: titleUpdate,
        content: questionUpdate
      }
      axios
        .put(`http://localhost:3000/home/questions/${id}`, obj, {
          headers: { token: localStorage.getItem('token') }
        })
        .then(response => {
          console.log(response)
          swal({
            text: 'Edit Question Success',
            icon: 'success'
          })
          this.$router.push('/')
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





