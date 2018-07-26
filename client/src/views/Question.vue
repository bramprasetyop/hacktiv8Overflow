<template >
  <div class="question">
    <Navbar/>

    <div class="container">

      <Question/>

    </div>

  </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue'
import LeftBox from '@/components/LeftBox.vue'

import Question from '@/components/QuestionPage.vue'

export default {
  name: 'question',
  components: {
    Question,
    Navbar,
    LeftBox
  }
}
</script>

