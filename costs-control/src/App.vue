<template>
  <div id="app">
   <div class="wrapper">
     <header class="head-title">My Personal Costs</header>
     <main>
       Total: {{ getSummAmount }}
       <TaskForm v-if="isTaskFormActive" @close="closeTaskForm" @addNewTask="onAdd"></TaskForm>
       <button  @click="showTaskForm">Add new</button>
       <TaskList :items="currentElements"></TaskList>
       <Pagination :cur="page" :n="n" :length="payments.length" @paginate="onPageChange"/>
     </main>
   </div>
  </div>
</template>

<script>
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";
import { mapMutations, mapGetters, mapActions } from 'vuex';
import Pagination from "@/components/Pagination";

export default {
  name: 'App',
  components: {
    TaskForm,
    TaskList,
    Pagination
},
  data() {
    return {
      page:1,
      n: 10,
      isTaskFormActive: false,
    };
  },
  computed:{
    ...mapGetters({
      getSummAmount: 'getFullPaymentAmount',
      payments: 'getPayments'
    }),
    currentElements() {
      const {n,page} = this
      return this.$store.getters.getPayments.slice(this.n * (this.page-1), this.n * (this.page-1) + this.n)
    }
  },

  methods: {
    ...mapMutations({
      setData: 'setPaymentsData',
      addData: 'addDataToPayments'
    }),
    ...mapActions([
        'fetchData'
    ]),
    onAdd(data) {
        this.addData(data)
    },
    onPageChange(p) {
      this.page = p
    },
    showTaskForm() {
      this.isTaskFormActive = true
    },
    closeTaskForm() {
      this.isTaskFormActive = false
    }
  },
  created() {
    this.fetchData()
    console.log(this.$store)
    // this.$store.dispatch('fetchData')
    // this.setData(this.fetchData())
  }
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
