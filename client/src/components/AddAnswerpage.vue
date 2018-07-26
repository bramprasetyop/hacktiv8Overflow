<template>

  <div class="row ">
    <div class="col s2">

      <router-link :to="`/answers/${$route.params.id}`">
        <button class="waves-effect waves-light btn-small">back</button>
      </router-link>
      <router-view/>

    </div>
    <div id="yaki" class="col s12 m12 l12 center">
      <span>Answer</span>
      <br>
      <VueEditor v-model="content"> </VueEditor>
    </div>

    <div id="submittt" class="col s3 right">
      <button @click="addAnswer()" class="waves-effect waves-light btn-small">Submit</button>
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
      answer: '',
      content: ''
    }
  },
  methods: {
    addAnswer() {
      let obj = {
        questionId: this.$route.params.id,
        content: this.content
      }
      axios
        .post('http://localhost:3000/answers', obj, {
          headers: { token: localStorage.getItem('token') }
        })
        .then(response => {

          // console.log(response)

          this.$router.push(`/answers/${this.$route.params.id}`)
          this.question = ''
        })
    }
  }
}
</script>





