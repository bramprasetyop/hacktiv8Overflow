<template>
  <div>
    <div class="col s12" id="oit">

      <div class="col s5">
        <div id="oii">
          <img id="itu" src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/10616439_10201985757480330_8973849717563076250_n.jpg?_nc_cat=0&_nc_eui2=AeE0txLW7RkfgZeWyFftSDPJbvX8mji5U4p5ozdkSWYbKKKDkqVBPabH73GdsHZN3qDVPenBhIawezobfUhXTHA3zu8I8_UM91m40UMRgej_6w&oh=f3c11d595e45d6af22090853f42bd53e&oe=5BE599FB" class="img-responsive" alt="">
        </div>
      </div>

      <div id="rightprofile" class="col s7">

        <h6 id="nama">
          <b>Bram Prasetyo</b>
        </h6>
        <div class="row">
          <div id="actionprofile" class="col s6">
            <p>Followers 12.4K</p>
          </div>
          <div id="actionprofile" class="col s6">
            <p> Tweets 1134</p>
          </div>
        </div>
      </div>

    </div>
    <div id="leftright">
      <h4>
        <strong>Articles</strong>
      </h4>
      <div v-for="(article,index) in articles" :key="index">
        <h6>
          <a @click= "changeHome()">
            <router-link :to="`/content/${article._id}`">{{article.title}}</router-link>
          </a>

        </h6>
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
      homepage:true
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
    },
    getOneArticle(id) {
      axios({
        method: 'get',
        url: `http://localhost:3000/home/articles/${id}`
      })
        .then(({ data }) => {
          console.log('xxxxxxx', data)
        })
        .catch(err => {
          console.log(err.message)
        })
    },
    changeHome(){
      homepage:false
    }
  }
}
</script>