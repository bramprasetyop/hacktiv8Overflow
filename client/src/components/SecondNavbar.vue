<template>
  <div id="ciat" class="row">
    <div id="nah" class=" col s2">
      <h6>
        <a href="/"> Home</a>
      </h6>
    </div>
    <div id="nah" class=" col s2">
      <h6>
        <a>About</a>
      </h6>
    </div>
    <div id="nah" class=" col s2">
      <h6>
        <a>profile</a>
      </h6>
    </div>
    <div id="nah" class=" col s2">
      <h6>
        <a>Contact</a>
      </h6>
    </div>
    <div id="nah" class=" col s3">
      <div id="nahi" class="col s3">
        <button onclick="document.getElementById('id02').style.display='block'" class="waves-effect waves-light btn-small">Post</button>
      </div>
      <div id="nahi" class="col s4">
        <button onclick="document.getElementById('id01').style.display='block'" class="waves-effect waves-light btn-small">Login</button>
      </div>
      <div id="nahi" class="col s4">
        <button @click="logout()" class="waves-effect waves-light btn-small">Logout</button>
      </div>
    </div>

    <div class="navbar">
      <!-- ============================================ -->
      <div class="row">
        <div class="col s6">

          <div id="id01" class="modal">
            <form class="modal-content animate" action="/action_page.php">
              <div class="imgcontainer">
                <span onclick="document.getElementById('id01').style.display='none'" class="close">&times;</span>
              </div>
              <div class="container">
                <label for="name">
                  <b>Email</b>
                </label>
                <input v-model="body" type="email" placeholder="Email..." name="name">

                <label for="psw">
                  <b>Password</b>
                </label>
                <input v-model="status" type="password" placeholder="Password..." name="psw">

                <button onclick="document.getElementById('id01').style.display='none'" @click="login()" type="button">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- ================================================= -->
    </div>

    <!-- ini untuk post artikel -->
    <div class="navbar">
      <!-- ============================================ -->
      <div class="row">
        <div class="col s6">

          <div id="id02" class="modal">
            <form class="modal-contentt animate" action="/action_page.php">
              <div class="imgcontainer">
                <span onclick="document.getElementById('id02').style.display='none'" class="close">&times;</span>
              </div>
              <div class="container">
                <label for="name">
                  <b>Title</b>
                </label>
                <input v-model="title" type="text" placeholder="Title..." name="name">

                <label for="psw">
                  <b>Article</b>
                </label>
                <textarea v-model="article" name="" id="" cols="60" rows="10"> </textarea>

                <button onclick="document.getElementById('id02').style.display='none'" @click="post()" type="button">Add Article</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- ================================================= -->
    </div>
  </div>
</template>

<script>
// Get the modal
var modal = document.getElementById('id01')

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

import axios from 'axios'

export default {
  data() {
    return {
      status: '',
      body: '',
      title: '',
      article: '',
      loginStatus:''
    }
  },
  methods: {
    logout() {
      if (localStorage.hasOwnProperty('token') === true) {
        swal({
          text: 'Logout Success',
          icon: 'success'
        })
        localStorage.clear()
        this.$router.push('/')
      }
    },
    login() {
      let obj = {
        email: this.body,
        password: this.status
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
    post() {
      let obj = {
        title: this.title,
        article: this.article
      }

      let token = localStorage.getItem('token')
      axios
        .post('http://localhost:3000/home', obj, {
          headers: {
            token: token
          }
        })
        .then(response => {
          // console.log(response);
          swal({
            text: 'Add Article Success',
            icon: 'success'
          })
          this.$router.push('/')
        })
        .catch(err => {
          swal({
            text: 'Something Wrong',
            icon: 'error'
          })
        })
    }
  }
}
</script>


<style>
.navbar {
  /* border: 1px solid black; */
  margin-top: -60px;
}
#nav-mobile {
  /* border: 1px solid black; */
  margin-right: 30px;
}

.brand-logo {
  /* border: 1px solid black; */
  margin-left: -600px;
}

/* =============================================== */

/* Full-width input fields */
input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #e64a4a;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

/* Extra styles for the cancel button */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}

/* img.avatar {
  width: 40%;
  border-radius: 50%;
} */

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  /* background-color: rgb(0, 0, 0); Fallback color */
  background-color: rgba(230, 224, 224, 0.4); /* Black w/ opacity */
  padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
  border-radius: 20px;
  background-color: #e1e9eb;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  /* border: 1px solid #888; */
  width: 40%; /* Could be more or less, depending on screen size */
  /* height: 100%; */
}

.modal-contentt {
  border-radius: 20px;
  background-color: #e1e9eb;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  /* border: 1px solid #888; */
  width: 100%; /* Could be more or less, depending on screen size */
  /* height: 100%; */
}

/* The Close Button (x) */
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s;
}

@-webkit-keyframes animatezoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes animatezoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
