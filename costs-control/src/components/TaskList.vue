<template>
    <div class="list">
      <div class="item" v-for="item of data" v-bind:key="item.id">
        <input type="checkbox"/>
        <span>{{ item.id }}</span>
        <span>{{ item.dateCreated }}</span>
        <span>{{ item.category }}</span>
        <span>{{ item.value }}</span>
        <button type="submit" class="button">Delete</button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'TaskList',
    props: {
        data: {
            type: Array,
            default: []
        }
    }
}
</script>

<style lang="scss">

.list {
  width: 600px;
  margin: 0 auto;
  border: 1px solid darkgray;
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>