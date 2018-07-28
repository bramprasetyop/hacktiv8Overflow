<template>
  <div>

    <div class="col s12 m12 l12" id="oit">
      <div id="homee" class="row">

        <h5 style="color:black" id="addQ" align="center">Welcome!
          <h5 v-if="user.username">{{user.username.toUpperCase()}}</h5>
        </h5>

      </div>
    </div>
    t
    <div id="tohome" class="row ">
      <router-link to="/">
        <a id="buttonhome" class="waves-effect waves-light">
          <i class="material-icons left">home</i>HOME</a>
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

<style>
#tohome {
  /* border: 1px solid black; */
  border-radius: 10px;
  width: 100%;
  margin-left: 0px;
  background-color: rgb(4, 80, 80);
}

#buttontohome {
  color: white;
}
</style>
