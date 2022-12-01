<template>
  <div id="app">
   <div class="wrapper">
     <header class="head-title">My Personal Costs</header>
     <main>
      <DashboardPage/>
     </main>
   </div>
  </div>
</template>

<script>


import DashboardPage from "@/pages/DasboardPage";
export default {
  name: 'App',
  components: {DashboardPage},
  data: () =>({}),
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
.head-title {
  font-size: 2rem;
  margin-bottom: 20px;
}


</style>
