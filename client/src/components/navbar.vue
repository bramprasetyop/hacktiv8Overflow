<template>
  <img id="gambar" src="https://i0.wp.com/vatih.com/wp-content/uploads/2018/05/makanan-yang-disuka.jpg?fit=1920%2C1080&ssl=1" alt="">
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
img {
  max-width: 100%;
  max-height: 100%;
}
#logout {
  margin-right: 15px;
}

#yadah {
  margin-top: -100px;
}

#gambar{
  /* border: 1px solid black; */
  margin-top: -60px;
}
</style>






