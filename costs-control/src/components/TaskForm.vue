<template>
    <div class="task-form">
      <div class="form-inputs">
        <input placeholder="Date" v-model="dateCreated">
        <select class="category-select"  v-model='category'>
          <option v-for="option in options" :key="option">
            {{ option }}
          </option>
        </select>
        <input placeholder="Amount" v-model.number="amount" type="number">
      </div>
      <div class="btn-group">
        <button @click="onSaveClick">Add</button>
        <button v-on:click="$emit('close')">Close</button>
      </div>
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
  position: absolute;
  background-color: white;
  top: 15%;
  left: calc(50% - 150px) ;
  border: 1px solid #2c3e50;
  border-radius: 15px;
    padding-top: 25px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    width: 300px;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
    .button {
        width: 33%;
    }
  .category-select {
    width: 60%;
    margin: 10px;
  }
}
.btn-group {
  margin-top:20px;
  display: flex;
  :last-child {
    margin-left:10px;
  }

}
</style>