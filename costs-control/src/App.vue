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
import { mapMutations, mapGetters, mapActions } from 'vuex'

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
  computed:{
    ...mapGetters({
      getSummAmount: 'getFullPaymentAmount',
      payments: 'getPayments'
    })
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

</style>
