<template>
<div class="nav"></div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>
<style>
#logo {
  border: 1px solid black;
}
.nav {
    /* border: 1px solid black; */
  margin-top: -60px;

  width: 100%;
  height: 20px;
  background-color: rgb(44, 41, 41)
}
#logout {
  margin-right: 15px;
}

#yadah {
  margin-top: -100px;
}

#gambar{
  /* border: 1px solid black; */
}
</style>






