<template>
  <div>
    Total: {{ getSummAmount }}
    <ModalWindowComponent></ModalWindowComponent>
    <button  @click="$modal.show('add')">Add new</button>
    <TaskList :items="currentElements"></TaskList>
    <Pagination :cur="page" :n="n" :length="payments.length" @paginate="onPageChange"/>
  </div>
</template>

<script>
import TaskList from "@/components/TaskList";
import ModalWindowComponent from "@/components/ModalWindowComponent";
import { mapMutations, mapGetters, mapActions } from 'vuex';
import Pagination from "@/components/Pagination";


export default {
  name: "Dashboard",
  components: {
    ModalWindowComponent,
    TaskList,
    Pagination,
  },
  data() {
    return {
      page:1,
      n: 10,
    };
  },
  computed: {
      ...mapGetters({
      payments: 'getPayments',
        getSummAmount: 'getFullPaymentAmount'
    }),
    currentElements() {
      const {n,page} = this
      return this.$store.getters.getPayments.slice(this.n * (this.page-1), this.n * (this.page-1) + this.n)
    }},
  methods: {
    ...mapMutations({
      addData: 'addDataToPayments'
    }),
    ...mapActions([
      'fetchData'
    ]),
    onPageChange(p) {
      this.page = p
    }
  },
  created() {
    this.fetchData()
    console.log(this.$store)
  }
};

</script>

<style lang="scss" scoped>

.dash-title {
  font-size: 2rem;
  margin-bottom: 20px;
}
</style>