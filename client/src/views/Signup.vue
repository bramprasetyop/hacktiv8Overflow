<template >
  <div class="login">
    <Navbar/>
    <div class="container">
      <div class="containers">
        <Signup/>

      </div>

    </div>

  </div>
</template>


<script>
import Signup from '@/components/SignupPage.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'login',
  components: {
    Signup,
    Navbar
  }
}
</script>
<style scoped>
.login {
background-color: rgb(225, 241, 241);
  background-size: cover;
  margin-top: -60px;
  height: 650px;
}
</style>
