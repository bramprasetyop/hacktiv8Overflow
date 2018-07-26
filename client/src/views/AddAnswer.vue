<template >

  <div class="answer">
    <Navbar/>
    <div class="container">

      <Addanswer/>

    </div>

  </div>
</template>


<script>
import Addanswer from '@/components/AddAnswerpage.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'answer',
  components: {
    Addanswer,
    Navbar
  }
}
</script>

