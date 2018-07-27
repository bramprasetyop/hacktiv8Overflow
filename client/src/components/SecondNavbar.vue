<template>

  <div id="ciat" class="row">
    <navbar/>
    <div id="judulnya" class="col s12 ">

      <div id="nah" class=" col s12 m4 l4 right">

        <div v-if="post" id="nahii" class="col s6 m4 l4 right">
          <router-link to="/login">
            <button class="waves-effect waves-light btn-small">Login</button>
          </router-link>
        </div>

        <div v-else id="nahi" class="col s6 m4 l4 right">
          <a href>
            <button @click="logout()" class="waves-effect waves-light btn-small">Logout</button>
          </a>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      post: true
    }
  },
  mounted() {
    if (localStorage.hasOwnProperty('token')) {
      this.post = false
      this.getAll()
    }
  },

  computed: {
    ...mapState(['questions'])
  },
  methods: {
    ...mapActions(['getAll']),

    logout() {
      swal({
        text: 'Logout Success',
        icon: 'success'
      })
      localStorage.removeItem('token')

      this.post = false

      this.$router.push('/')
      this.getAll()
    }

  }
}
</script>


<style>
</style>
