<template> 
<div>
    <input v-model="newTask" type="text"/>
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