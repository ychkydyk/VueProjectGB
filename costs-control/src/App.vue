<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"> <br>
    <button  v-on:click="visible=!visible" class="button_new-cost">ADD NEW COST +</button>
    <TaskForm v-show="!visible"  v-on:add="onAdd"></TaskForm>
    <TaskList v-on:done="onDone" v-on:remove="onRemove" v-bind:listdata="currentElements"></TaskList>
    <Pagination :cur="page" :n="n" :length="list.length" @paginate="onChangePage"/>
    
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue'
import TaskForm from './components/TaskForm.vue'
import Pagination from './components/Pagination.vue';

export default {
  name: 'App',
  components: {
    TaskList,
    TaskForm,
    Pagination
},
  data() {
    return {
      list: [],
      visible: true,
      page: 1,
      n: 10
    }
  },
  computed: {
currentElements() {

  return this.list.slice(this.n * (this.page - 1), this.n * (this.page - 1) + this.n)
}
  },

  methods: {
    hideInput() {
    this.inputVisibility = false;
    // или можно тоггл
    // this.inputVisibility = !this.inputVisibility;
  },
    onRemove(id) {
      const idx = this.list.findIndex((item) => item.id == id)
      this.list.splice(idx, 1)
    },
    onDone(id) {
      const item = this.list.find((item) => item.id == id)
      item.isDone = !item.isDone
    },
    onAdd(category, dateCreated, amount) {
      this.list.push({id:this.list.length + 1,dateCreated, category, amount, isDone: false})
      
    },
    onChangePage(p) {
      this.page = p
    }
  },
  created() {
    setTimeout(() => {
      this.list = [
        {id: 1, dateCreated:'2022-04-20', category: 'Категория 1', amount:420, isDone: false},
        {id: 2, dateCreated:'2022-04-20', category: 'Категория 2', amount:420, isDone: true},
        {id: 3, dateCreated:'2022-04-20', category: 'Категория 3', amount:420, isDone: false},
        {id: 4, dateCreated:'2022-04-20', category: 'Категория 1', amount:420, isDone: false},
        {id: 5, dateCreated:'2022-04-20', category: 'Категория 2', amount:420, isDone: true},
        {id: 6, dateCreated:'2022-04-20', category: 'Категория 3', amount:420, isDone: false},
        {id: 7, dateCreated:'2022-04-20', category: 'Категория 1', amount:420, isDone: false},
        {id: 8, dateCreated:'2022-04-20', category: 'Категория 2', amount:420, isDone: true},
        {id: 9, dateCreated:'2022-04-20', category: 'Категория 3', amount:420, isDone: false},
        {id: 10, dateCreated:'2022-04-20', category: 'Категория 1', amount:420, isDone: false},
        {id: 11, dateCreated:'2022-04-20', category: 'Категория 2', amount:420, isDone: true},
        {id: 12, dateCreated:'2022-04-20', category: 'Категория 3', amount:420, isDone: false},
        {id: 13, dateCreated:'2022-04-20', category: 'Категория 1', amount:420, isDone: false},
        {id: 14, dateCreated:'2022-04-20', category: 'Категория 2', amount:420, isDone: true},
        {id: 15, dateCreated:'2022-04-20', category: 'Категория 3', amount:420, isDone: false},
        {id: 16, dateCreated:'2022-04-20', category: 'Категория 1', amount:420, isDone: false},
        {id: 17, dateCreated:'2022-04-20', category: 'Категория 2', amount:420, isDone: true},
        {id: 18, dateCreated:'2022-04-20', category: 'Категория 3', amount:420, isDone: false},
        {id: 19, dateCreated:'2022-04-20', category: 'Категория 1', amount:420, isDone: false},
        {id: 20, dateCreated:'2022-04-20', category: 'Категория 2', amount:420, isDone: true},
        {id: 21, dateCreated:'2022-04-20', category: 'Категория 3', amount:420, isDone: false},
        {id: 22, dateCreated:'2022-04-20', category: 'Категория 1', amount:420, isDone: false},
        {id: 23, dateCreated:'2022-04-20', category: 'Категория 2', amount:420, isDone: true},
        {id: 24, dateCreated:'2022-04-20', category: 'Категория 3', amount:420, isDone: false},
        {id: 25, dateCreated:'2022-04-20', category: 'Категория 1', amount:420, isDone: false},
        {id: 26, dateCreated:'2022-04-20', category: 'Категория 2', amount:420, isDone: true},
        {id: 27, dateCreated:'2022-04-20', category: 'Категория 3', amount:420, isDone: false},
        {id: 28, dateCreated:'2022-04-20', category: 'Категория 1', amount:420, isDone: false},
        {id: 29, dateCreated:'2022-04-20', category: 'Категория 2', amount:420, isDone: true},
        {id: 30, dateCreated:'2022-04-20', category: 'Категория 3', amount:420, isDone: false},
        {id: 31, dateCreated:'2022-04-20', category: 'Категория 1', amount:420, isDone: false},
        {id: 32, dateCreated:'2022-04-20', category: 'Категория 2', amount:420, isDone: true},
        {id: 33, dateCreated:'2022-04-20', category: 'Категория 3', amount:420, isDone: false},
        {id: 34, dateCreated:'2022-04-20', category: 'Категория 1', amount:420, isDone: false},
        {id: 35, dateCreated:'2022-04-20', category: 'Категория 2', amount:420, isDone: true},
        {id: 36, dateCreated:'2022-04-20', category: 'Категория 3', amount:420, isDone: false},
        

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
.button_new-cost {
  padding: 5px;
  background-color: #0eaba6;
  color: white;
  border: none;
}

</style>
