<template>
    <div class="task-list-wrapper">
        <div class="item" v-for="(item, idx) in items" :key="idx">
          <p>{{item.id}}</p>
          <p>{{item.dateCreated}}</p>
          <p>{{item.category}}</p>
          <p>{{item.amount }}$</p>
          <p @click="onClickContextItem($event,item)">...</p>
        </div>
      </div>
</template>

<script>
export default {
    name: 'TaskList',
    props: {
      items: {
        type: Array,
        default: () => [],
      },
    },
  methods: {
      editPayment(item) {
        this.$router.push(`/edit/payment/${item.category}?value=${item.amount}&date=${item.dateCreated}&id=${item.id}`)
      },
    removePayment(item) {
      if (item !== undefined) {
        this.$store.commit("removePaymentList", item)
      }
    },
      onClickContextItem(event,item){
        console.log(event)
        const items =  [
          {
            text: 'Edit',
            action:()=>{
              this.editPayment(item)
            }
          },
          {
            text: 'Remove',
            action:()=>{
              this.removePayment(item)
            }
          },
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