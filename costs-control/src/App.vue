<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"> 
    <TaskList v-on:done="onDone" v-on:remove="onRemove" v-bind:data="list"></TaskList>
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue'

export default {
  name: 'App',
  components: {
    TaskList,
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    onRemove(id) {
      const idx = this.list.findIndex((item) => item.id == id)
      this.list.splice(idx, 1)
    },
    onDone(id) {
      const item = this.list.find((item) => item.id == id)
      item.isDone = !item.isDone
    }
  },
  created() {
    setTimeout(() => {
      this.list = [
        {id: 1, dateCreated:'04.20.20', category: 'Категория 1', value:420, isDone: false},
        {id: 2, dateCreated:'04.20.20', category: 'Категория 2', value:420, isDone: true},
        {id: 3, dateCreated:'04.20.20', category: 'Категория 3', value:420, isDone: false}
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

</style>
