<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b>Name {{ data.name }}</b><br>
    <b>Id {{data.id}}</b>, Position {{data.position}}, Stock {{data.stock}}<br>
    <b>Description:</b><br>
    {{ data.description }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ProductId',
  data () {
    return {
      msg: 'Product Id Page',
       data: [],
    }
  },
  created(){
      axios.get('http://localhost/?id='+this.$route.params.product_id)
      .then(response=> {

       this.data = response.data['0']
        console.log(this.data)
      })
      .catch(error=>{
          console.log(error)
      })
  },

}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
