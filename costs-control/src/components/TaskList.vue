<template>
    <div class="task-list-wrapper">
      <div class="item" v-for="(item, idx) in items" :key="idx">
        <p>{{item.id}}</p>
        <p>{{item.dateCreated}}</p>
        <p>{{item.category}}</p>
        <p>{{item.amount }}$</p>
        <p @click="onClickContextItem($event, item)" class="contextevent">...</p>
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
    },
  methods: {
    onClickContextItem(event,item){
      const items =  [
        {
          text: 'Edit',
          actions:()=>{
            console.log(item, 'edit') // вставить метод на редактирование
          }
        },
        {
          text: 'Remove',
          actions:()=>{
            console.log(item, 'remove')/// тут вставить метод на удаление
          }
        }
      ]
      this.$context.show({event, items})
    }
  }
  };
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