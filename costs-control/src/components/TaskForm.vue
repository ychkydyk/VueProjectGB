<template>
    <div class="task-form">
      <input placeholder="Date" v-model="dateCreated">
      <select v-model='category'>
        <option v-for="option in options" :key="option">
          {{ option }}
        </option>
      </select>
      <input placeholder="Amount" v-model.number="amount" type="number">
      <button @click="onSaveClick">Add</button>
    </div>

</template>

<script>

export default {
    name: "TaskForm",
    data() {
        return {
          dateCreated: '',
          category: '',
          amount: 0
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
    onSaveClick() {
        const data = {
          dateCreated: this.dateCreated || this.getCurrentDate,
          category: this.category,
          amount: this.amount
        }
        this.$emit('addNewTask', data)
      }
  },
mounted(){
      if(!this.category?.length) {
        this.$store.dispatch('fetchCategory')
      }
}
}
</script>

<style lang="scss">

.task-form {
    padding-top: 25px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    max-width: 300px;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
    .button {
        width: 33%;
    }
}
</style>