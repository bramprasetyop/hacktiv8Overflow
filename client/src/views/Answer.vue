<template>
  <div class="details">
    <div>
     
      <navbar/>


      <div class="row">

        <div id="left" class="col s12 m4 l3">

          <div id="boxleft" class="col s12">
            <LeftBox/>
          </div>

        </div>

        <div id="centerbody" class="col s12 m8 l8">

          <Answer/>
        </div>

      </div>
    </div>
    <Footer/>
  </div>
</template>


<script>
import Answer from '@/components/AnswerPage.vue'
import Navbar from '@/components/Navbar.vue'
import LeftBox from '@/components/LeftBox.vue'
import RightBox from '@/components/RightBox.vue'
import SecondNavbar from '@/components/SecondNavbar.vue'
import axios from 'axios'
import Footer from '@/components/Footer.vue'
import Articles from '@/components/Article.vue'

export default {
  name: 'answerpage',
  components: {
    Answer,
    Navbar,
    LeftBox,
    RightBox,
    SecondNavbar,
    Footer,
    Articles
  }
}
</script>

