<template> 
<div> 
   
        <!-- <input class="date"  type="date"/> -->
        <input class="desc" v-model="newTask" type="text"/>
        <!-- <input class="amount"  type="number"/> -->
        <button v-on:click="add">+new</button>
    
</div>
</template>>

<script>
export default {
    name: 'TaskForm',
    data() {
        return {
            newTask: ''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.newTask)
            this.newTask = ''
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