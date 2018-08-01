<template>
  <div>

    <div class="col s12 m12 l12" id="oit">

      <div id="homee" class="row">

        <h5 style="color:black" id="addQ" align="center">Welcome!
        </h5>
        <h5 v-if="user.username">{{user.username.toUpperCase()}}</h5>

      </div>
      <div id="tohome" class="row ">
        <router-link to="/">
          <a id="buttonhome" class="waves-effect waves-light">
            <i class="material-icons left">home</i>HOME</a>
        </router-link>

      </div>
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
    this.getOneUser()
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(['getOneUser'])
  }
}
</script>


