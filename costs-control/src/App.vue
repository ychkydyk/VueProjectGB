<template>
  <div id="app">
     <header>
        <nav>
          <router-link class="router-link" to="dashboard"> Dashboard </router-link>
          <router-link class="router-link" to="about"> About </router-link>
          <router-link class="router-link" to="notfound"> Not Found </router-link>
        </nav>
     </header>
     <main>
       <router-view/>
     </main>
   </div>
</template>

<script>


export default {
  name: 'App',

  data: () =>({
    page: 'dashboard',
    }),

  methods: {

  },

  mounted() {
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link {
  padding: 5px;
}
.router-link:visited {
  color: #00f;
}
  nav {
  margin-bottom: 15px;
}

</style>
