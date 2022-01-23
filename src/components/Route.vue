<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <i>Initial products ids: <span v-for="i_id in data.initial_products_ids">{{i_id}}, </span></i><br>
    <b>Picker: {{ data.picker}}</b>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Picker moves</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="step, index in data.steps" :key="index">
      <th scope="row">{{index}}</th>
      <td><span v-for="move in step">Id:{{move.id}} position:<b>{{move.position}}</b>, </span></td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CalculateRoute',
  data () {
    return {
      title: 'Route',
      data: [],
    }
  },
    created(){
      axios.get('http://localhost/pickingroute.php')
      .then(response=> {
        this.data = response.data
      })
      .catch(error=>{
          console.log(error)
      })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
table {
  margin-top: 50px;
}

</style>
