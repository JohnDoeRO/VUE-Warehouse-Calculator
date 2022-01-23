<template>
  <div>

<h1>Products</h1>
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Position</th>
      <th scope="col">Stock</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in products" :key="product.id">
      <th scope="row"><router-link :to="{name: 'productId', params:{product_id:product.id}}">{{product.id}}</router-link></th>
      <td>{{product.name}}</td>
      <td><router-link :to="{name: 'productBin', params:{position:product.position}}">{{product.position}}</router-link></td>
      <td>{{product.stock}}</td>
    </tr>

  </tbody>
</table>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Products',
  data () {
    return {
      products: [],
    }
  },
  created(){
      axios.get('http://localhost/')
      .then(response=> {
        this.products = response.data
      })
      .catch(error=>{
          console.log(error)
      })
  }
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
