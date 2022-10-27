<template>
    <div class="list">
      <div class="task-list_header">
    <span>id#</span>
    <span>Date</span>
    <span>Category</span>
    <span>Value</span>
    <span>...</span>
   </div> 
      <div v-bind:class="{item: true, done:item.isDone}" v-for="item of listdata" v-bind:key="item.id">
        <!-- <input v-on:change="done(item.id)" type="checkbox" v-bind:checked="item.isDone"/> -->
        <span class="list-id">#{{ item.id }}</span>
        <span>{{ item.dateCreated }}</span>
        <span>{{ item.category }}</span>
        <span>{{ item.amount }}</span>
        <button v-on:click="remove(item.id)">Delete</button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'TaskList',
    props: {
        listdata: {
            type: Array, // способ описания пропсов
            default: []
        }
    },
    methods: {
        remove(id) {
            this.$emit('remove', id)
        },
        done(id) {
            this.$emit('done', id)
        }
    }
}
</script>

<style lang="scss">

.list {
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid darkgray;

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .list-id {
      width: 40px
    }
  }
  .done {
    color:#0eaba6;

    span {
        text-decoration: line-through;
    }
  }
}
</style>