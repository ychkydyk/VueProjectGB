<template>
  <div  class="form-inputs">
    <input placeholder="Date" v-model="dateCreated">
    <select class="category-select"  v-model='category'>
      <option v-for="option in options" :key="option">
        {{ option }}
      </option>
    </select>
    <input placeholder="Amount" v-model.number="amount" type="number">
    <button @click="onSaveClick">Add</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TaskFormAdd",
  data() {
    return {
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
        id: (this.$store.getters.getId),
        dateCreated: this.dateCreated || this.getCurrentDate,
        category: this.category,
        amount: this.amount
      }
      this.addData(data)
    }
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