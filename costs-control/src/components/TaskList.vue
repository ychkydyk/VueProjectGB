<template>
    <div class="task-list-wrapper">
      <div class="item" v-for="(item, idx) in items" :key="idx">
        {{ item }}
      </div>
      </div>
</template>

<script>
export default {
    name: 'TaskList',
    props: {
      items: {
        type: Array,
        default: ()=>([])
      }
    }
  }
</script>

<style lang="scss">

.task-list-wrapper {
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid darkgray;
}
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;

  }


</style>