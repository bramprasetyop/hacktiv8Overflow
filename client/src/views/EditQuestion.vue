<template >

  <div class="answer">
    <Navbar/>
    <div class="container">

      <EditQuestion/>

    </div>

  </div>
</template>


<script>
import EditQuestion from '@/components/editQuestionPage.vue'
import Navbar from '@/components/Navbar.vue'
import SecondNavbar from '@/components/SecondNavbar.vue'
export default {
  name: 'answer',
  components: {
    EditQuestion,
    Navbar,
    SecondNavbar
  }
}
</script>