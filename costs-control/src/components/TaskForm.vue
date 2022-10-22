<template> 
<div> 
   
        <input class="date" v-model="newTaskDate" type="date"/>
        <input class="desc" v-model="newTaskCat" type="text"/>
        <input class="amount" v-model="newTaskAmount"  type="number"/>
        <button v-on:click="add">+new</button>
    
</div>
</template>>

<script>
export default {
    name: 'TaskForm',
    data() {
        return {
            newTaskCat: ''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.newTaskCat, this.newTaskDate, this.newTaskAmount)
            this.newTaskCat = '',
            this.newTaskDate = this.newTaskDate 
        }
    }
}
</script>

<style lang="scss">

.add-form {
    max-width: 33%;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    margin: 0  auto;
    
    input {
        margin-bottom: 10px;
    }

    button {
        max-width: 33%;
        margin: 0 auto;
    }
}

</style>