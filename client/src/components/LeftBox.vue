<template>
  <div>

    <div class="col s12 m12 l12" id="oit">

      <router-link id="homee" to="/">
        <h1 id="addQ" align="center">Stuck <br> Overflow</h1>
      </router-link>

    </div>

  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      homepage: true
    }
  },
  created() {
    this.getAll()
  },
  computed: {
    ...mapState(['articles', 'article'])
  },
  methods: {
    ...mapActions(['getAll']),
    logout() {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
