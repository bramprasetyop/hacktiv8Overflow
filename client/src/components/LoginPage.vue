<template>

  <div class="row col s12 m12 l12">

    <div id="yaki" class="col s12 m12 l12 ">

      <div class="input-field col s12 m11 l11">
        <i class="material-icons prefix">email</i>
        <input v-model="email" type="text" >
        <label >Email</label>
      </div>

      <div class="input-field col s12 m11 l11">
        <i class="material-icons prefix">lock</i>
        <input v-model="password" type="password">
        <label >Password</label>
      </div>

      <div id="itt" class="input-field col s12 m4 l4 left">
        <a @click= "login" class="waves-effect waves-light btn">Login</a>
      </div>

      <div id="itt" class="input-field col s12 m8 l8 left">
        <a @click= "loginFb" id="oyiya" class="fb btn">
          <i class="fa fa-facebook fa-fw"></i> Login with Facebook
        </a>
      </div>
      <div id="itt" class="input-field col s12 m5 l5  ">

        <router-link to="/signup">
          <a style="color:blue" class="waves-effect waves-light">Register Now!</a>
        </router-link>
      </div>
    </div>

  </div>

</template>


<script>
import { getFbAPI } from '@/helpers/fbApi.js'
import { firebase, providerFB } from '@/helpers/firebase.js'
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
      
    }
  },
  methods: {
    login() {
      let obj = {
        email: this.email,
        password: this.password
      }
      axios
        .post('http://localhost:3000/login', obj)
        .then(response => {
          // console.log(response);

          localStorage.setItem('token', response.data.token)
          
          this.$router.push('/')
          
          swal({
            text: 'Login Success',
            icon: 'success'
          })
        })
        .catch(err => {
          swal({
            text: 'Email/ Username Wrong',
            icon: 'error'
          })
        })
    },
        loginFb() {
      firebase
        .auth()
        .signInWithPopup(providerFB)
        .then(result => {
          // console.log(result.user.providerData[0].displayName);

          // var token = result.credential.accessToken

          // console.log(token)
          // localStorage.setItem('token', token)
          // console.log(result);
          
          swal({
            text: 'Login Success',
            icon: 'success'
          })

          let account = {
            username: result.user.providerData[0].displayName,
            email: result.user.providerData[0].email,
            password: result.user.providerData[0].displayName
          }

          axios
            .post('http://localhost:3000/loginWithFb', account)
            .then(response => {
              // console.log(response.data.token);
              // this.$router.push('/login')
              // console.log('masuk lah gan', response.data.token)

              localStorage.setItem('token', response.data.token)
              this.$router.push('/')
            })
            .catch(err => {})

          // var user = result.user
          // console.log(result)

          // console.log(result.user.providerData[0].displayName)
        })
        .catch(function(error) {
          var errorCode = error.code
          var errorMessage = error.message
          var email = error.email
          var credential = error.credential
        })
    }
    // ====================== tambahan yang ini coy ===========================
  }
}
</script>





