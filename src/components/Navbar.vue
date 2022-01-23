<template>
  <div class="row">
    <div class="col-12">
      <nav>
        <ul>
          <li><router-link :to="{name: 'products'}" class="btn btn-dark">Products</router-link></li>
          <li><router-link :to="{name: 'routeCalc'}" class="btn btn-dark">Calculate route</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
    }
  },
  methods: {
  }
};
</script>

<style>
nav {
  text-align: center;
}
nav ul {
  padding: 0;
}
nav li {
  display: inline-block;
  list-style-type: none;
  margin: 0;
  padding: 8px;
}
a {
  color: red;
}
</style>
<style scoped>
a {
  color: #ccc;
  font-weight: bold;
}
h2 {
  color: red;
}
a.router-link-exact-active {
  color: #fff;
  text-decoration: underline;
}
</style>
