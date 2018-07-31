<template>

  <div class="row ">
    <div class="col s6 m2 l2">
      <button @click="back" class="waves-effect waves-light btn-small">back</button>

    </div>

    <div id="yaki" class="col s12 m12 l12 center">
      <span>Title</span>
      <input v-model="title" type="text">
      <span>Question</span>
      <br>
      <VueEditor v-model="question"></VueEditor>
    </div>

    <div id="submittt" class="col s6 m3 l3 right">
      <button @click="addquestion()" class="waves-effect waves-light btn-small">Submit</button>
    </div>
  </div>

</template>


<script>
import { VueEditor } from 'vue2-editor'
import axios from 'axios'

export default {
  components: {
    VueEditor
  },
  data() {
    return {
      question: '',
      title: ''
    }
  },
  methods: {
    back() {
      this.$router.push('/')
    },
    addquestion() {
      let obj = {
        title: this.title,
        content: this.question
      }
      axios
        .post('https://api-hacktiv.bramaprasetyo.co/home', obj, {
          headers: { token: localStorage.getItem('token') }
        })
        .then(response => {
          // console.log(response)
          swal({
            text: 'Add Answer Success',
            icon: 'success'
          })
          this.$router.push('/')
          this.title = ''
          this.question = ''
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





