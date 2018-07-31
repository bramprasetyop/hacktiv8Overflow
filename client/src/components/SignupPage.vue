<template>

  <div class="row ">

    <div id="yaki" class="col s12 m12 l12 center">

      <div class="input-field col s12 m11 l11">
        <i class="material-icons prefix">account_circle</i>
        <input v-model="username" type="text">
        <label>Full Name</label>
      </div>

      <div class="input-field col s12 m11 l11">
        <i class="material-icons prefix">email</i>
        <input v-model="email" type="email">
        <label>Email</label>
      </div>

      <div class="input-field col s12 m11 l11">
        <i class="material-icons prefix">lock</i>
        <input v-model="password" type="password">
        <label>Password</label>
      </div>

      <div id="itt" class="input-field col s12 m4 l4 left">
        <a @click="signup()" class="waves-effect waves-light btn">Signup</a>
      </div>
      <div id="itt" class="input-field col s12 m6 l6 left">
        have an account?
        <router-link to="/login">
          <a style="color:blue" class="waves-effect waves-light ">Log in</a>
        </router-link>

      </div>

    </div>
  </div>

</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signup() {
      let obj = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      axios
        .post('https://api-hacktiv.bramaprasetyo.co', obj)
        .then(response => {
          // console.log(response);

          this.$router.push('/login')
          swal({
            text: 'Signup Success',
            icon: 'success'
          })
        })
        .catch(err => {
          swal({
            text: 'Something wrong',
            icon: 'error'
          })
        })
    }
  }
}
</script>





