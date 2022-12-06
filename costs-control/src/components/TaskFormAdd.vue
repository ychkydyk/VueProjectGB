<template>
  <v-card class="text-left pa-6">
    <v-text-field v-model="dateCreated" label="Date"/>
    <v-text-field v-model="amount"  type="number" label="Amount"/>
    <v-select v-model="category" :items="options"/>
    <v-btn @click="onSaveClick">Add</v-btn>
<!--    <v-btn @click="onEditClick">Edit</v-btn>-->
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TaskFormAdd",
  data() {
    return {
      mode: this.$route.params.mode,
      id: '',
      dateCreated: '',
      category: '',
      amount: 0,
    }
  },
  computed: {
    getCurrentDate(){
      const today = new Date();
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    },
    options(){
      return this.$store.getters.getCategory

    }
  },
  methods: {
    ...mapMutations({
      setData: 'setPaymentsData',
      addData: 'addDataToPayments'
    }),
    onSaveClick() {
      const data = {
        id: (this.$store.getters.getId +1 ),
        dateCreated: this.dateCreated || this.getCurrentDate,
        category: this.category,
        amount: this.amount
      }
      this.addData(data)
    },
    onEditClick() {
      this.$store.commit('editPaymentList', {
        id: +this.$route.query.id,
        category: this.category,
        amount: this.amount,
        dateCreated: new Date().toLocaleDateString('ru-RU', { day: "numeric", month: "numeric", year: "numeric", }),
      })
    },
  },
  mounted() {
    if(!this.category?.length) {
      this.$store.dispatch('fetchCategory')
    }
  }
};
</script>

<style scoped>

</style>