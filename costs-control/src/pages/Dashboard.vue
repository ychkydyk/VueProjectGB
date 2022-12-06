<template>
  <v-row>
    <v-col>
      <v-dialog v-model="dialog" max-width="50%">
        <template #activator="{ on }">
          <v-btn v-on="on" color="green lighten-1" :ripple="false" dark flat>Add new cost <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
          <task-form-add/>
        </v-card>
      </v-dialog>
      <div>
        <div class="text-h5 text-md-h3">My Personal costs</div>
        <div class="dash-total">Total: {{ getSummAmount }}</div>
        <TaskList :items="currentElements"></TaskList>
        <Pagination :cur="page" :n="n" :length="payments.length" @paginate="onPageChange"/>
      </div>
    </v-col>
    <v-col>График</v-col>
  </v-row>
</template>

<script>
import TaskList from "@/components/TaskList";
import { mapMutations, mapGetters, mapActions } from 'vuex';
import Pagination from "@/components/Pagination";
import TaskFormAdd from "@/components/TaskFormAdd";


export default {
  name: "Dashboard",
  components: {
    TaskFormAdd,
    TaskList,
    Pagination,
  },
  data() {
    return {
      dialog: false,
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
    },
    openAddPaymentForm() {
    this.$modal.show('TaskFormAdd', {
    title: "Add new cost"
    })
    }
  },
  created() {
    this.fetchData()
    console.log(this.$store)
  }
};

</script>

<style lang="scss" scoped>

</style>