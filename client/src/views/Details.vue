<template>
  <div class="home">
    <div>
      <Navbar/>

      <div id="judulnya" class="col s12">

        <SecondNavbar/>
      </div>

      <div class="row">

        <div id="left" class="col s12 m4 l3">

          <div id="boxleft" class="col s12">
            <LeftBox/>
          </div>

        </div>

        <div id="centerbody" class="col s12 m8 l6">

          <Articles/>
        </div>

        <div id="right" class="col s12 m4 l3">
          <div id="boxright" class="col s12">

            <RightBox/>

          </div>

        </div>

      </div>
    </div>
    <Footer/>
  </div>
</template>


<script>
import Articles from '@/components/Article.vue'
import Navbar from '@/components/navbar.vue'
import LeftBox from '@/components/LeftBox.vue'
import RightBox from '@/components/RightBox.vue'
import SecondNavbar from '@/components/SecondNavbar.vue'
import axios from 'axios'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Articles,
    Navbar,
    LeftBox,
    RightBox,
    SecondNavbar,
    Footer
  }
}
</script>

