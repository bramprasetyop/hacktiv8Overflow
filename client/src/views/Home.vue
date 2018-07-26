<template>
  <div class="details">
    <div>
     
      <SecondNavbar/>


      <div class="row">

        <div id="left" class="col s12 m3 l3">

          <div id="boxleft" class="col s12">
            <LeftBox/>
          </div>

        </div>

        <div id="centerbody" class="col s12 m8 l8">

          <Body/>
        </div>

      </div>
    </div>
    <Footer/>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue'
import LeftBox from '@/components/LeftBox.vue'
import RightBox from '@/components/RightBox.vue'
import SecondNavbar from '@/components/SecondNavbar.vue'
import axios from 'axios'
import Footer from '@/components/Footer.vue'
import Body from '@/components/Body.vue'

export default {
  name: 'details',
  components: {
    // HelloWorld,
    Navbar,
    LeftBox,
    RightBox,
    SecondNavbar,
    Footer,
    Body
  }
}
</script>

