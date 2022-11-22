<template>
    <div class="task-form">
      <input placeholder="Date" v-model="dateCreated">
      <input placeholder="Category" v-model="category">
      <input placeholder="Amount" v-model.number="amount" type="number">
      <button @click="onSaveClick">Add</button>
    </div>

</template>

<script>

export default {
    name: 'TaskForm',
    data() {
        return {
          dateCreated: '',
          category: '',
          amount: 0

        }
    },
  computed: {
      getCurrentDate() {
        const today = new Date();
        const d = today.getDate();
        const m = today.getMonth() + 1;
        const y = today.getFullYear()
        return `${d}.${m}.${y}`
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