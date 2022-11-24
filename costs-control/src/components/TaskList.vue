<template>
    <div class="task-list-wrapper">
      <div class="item" v-for="(item, idx) in items" :key="idx">
        <p>{{item.dateCreated}}</p>
        <p>{{item.category}}</p>
        <p>{{item.amount }}$</p>
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
  max-width: 75%;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 25px 0 25px;
  border-radius: 15px;
  background-color: #cccccc;
}
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;

  }


</style>