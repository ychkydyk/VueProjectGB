<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"> 
    <div class="list">
      <div class="item" v-for="item of list" v-bind:key="item.id">
        <input type="checkbox"/>
        <span>{{ item.id }}</span>
        <span>{{ item.dateCreated }}</span>
        <span>{{ item.category }}</span>
        <span>{{ item.value }}</span>
        <button type="submit" class="button">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      list:[]
    }
  },
  created() {
    setTimeout(() => {
      this.list = [
        {id: 1, dateCreated:'today', category: 'task 1', value:420, isDone: false},
        {id: 2, dateCreated:'today', category: 'task 2', value:420, isDone: true},
        {id: 3, dateCreated:'today', category: 'task 3', value:420, isDone: false}
      ]
    }, 1000);
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.list {
  width: 600px;
  margin: 0 auto;
  border: 1px solid darkgray;
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
