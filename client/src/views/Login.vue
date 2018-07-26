<template >
  <div class="login">
    <Navbar/>
    <div class="container">
      <div class="containers">
        <Login/>

      </div>

    </div>

  </div>
</template>


<script>
import Login from '@/components/LoginPage.vue'
import Navbar from '@/components/Navbar.vue'


export default {
  name: 'login',
  components: {
    Login,
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
