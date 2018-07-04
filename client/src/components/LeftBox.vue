<template>
  <div>
<a >    <div class="col s12" id="oit">



      

        <h1 id="addQ" align="center">Stuck <br> Overflow</h1>
 

    </div></a>
    <div id="leftright">
      <h4>
        
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

<style>
#addQ{
  margin: 2px 2px 2px 2px;
}
</style>
