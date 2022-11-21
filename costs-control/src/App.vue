<template>
  <div id="app">
   <div class="wrapper">
     <header>My Personal Costs</header>
     <main>
       Total: {{ getSummAmount }}
       <TaskForm @addNewTask="onAdd"></TaskForm>
     <TaskList :items="payments"></TaskList>
     </main>
   </div>
  </div>
</template>

<script>
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    TaskForm,
    TaskList,
},
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters({
      getSummAmount: 'getFullPaymentsAmount',
      payments: 'getPayments'

    }),
  },

  methods: {
    ...mapMutations({
      setData: 'setPaymentsData',
      addData: 'addDataToPayments'
    }),
    fetchData() {
      return [
        {dateCreated:'2022-04-20', category: 'Категория 1', amount:420},
        {dateCreated:'2022-04-20', category: 'Категория 2', amount:420},
        {dateCreated:'2022-04-20', category: 'Категория 3', amount:420}
      ]
      },

    onAdd(data) {
        this.addData(data)
    }
  },


  created() {
    this.setData(this.fetchData())
  }
}
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

</style>
