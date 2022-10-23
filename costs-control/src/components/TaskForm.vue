<template> 

    <div class="input-block"> 
    <input v-model="newTaskDate" type="date"/>
    <input placeholder="Payment Category" class="desc" v-model="newTaskCat" type="text"/>
    <input placeholder="Payment Amount" class="amount" v-model="newTaskAmount"  type="number"/>
    <button v-on:click="add">+new</button>
    
    </div>


</template>

<script>
export default {
    name: 'TaskForm',
    visible: true,
    data() {
        return {
            newTaskCat: '',
            newTaskDate: '',
            newTaskAmount: ''
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
.task-list_header {
    display: flex;
    max-width: 600px;
    margin: 0 auto;
    justify-content: space-between;
    border: 1px solid darkgray;
    
}
.input-block {
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
.add-form {
    max-width: 33%;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    margin: 0  auto;
    
    
    input {
        margin-bottom: 10px;
    }
}

</style>