<template>

  <v-container>

    <v-row>
      <v-col cols="1">#</v-col>
      <v-col cols="4">Date</v-col>
      <v-col cols="5">Category</v-col>
      <v-col cols="2">Amount</v-col>

    </v-row>
    <v-row v-for="({category, dateCreated, amount}, id) in items"
    :key="id"
    >
      <v-col cols="1">{{ id +1 }}</v-col>
      <v-col cols="4">{{ dateCreated }}</v-col>
      <v-col cols="5">{{ category }}</v-col>
      <v-col cols="2">{{ amount }}</v-col>
    </v-row>
  </v-container>
<!--    <div class="task-list-wrapper">-->
<!--        <div class="item" v-for="(item, idx) in items" :key="idx">-->
<!--          <p>{{item.id}}</p>-->
<!--          <p>{{item.dateCreated}}</p>-->
<!--          <p>{{item.category}}</p>-->
<!--          <p>{{item.amount }}$</p>-->
<!--          <p @click="onClickContextItem($event,item)">...</p>-->
<!--        </div>-->
<!--      </div>-->
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
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 25px 0 25px;
  border-radius: 15px;
  background-color: #cccccc;
}
  .item {
    display: flex;
    align-items: center;
  }


</style>