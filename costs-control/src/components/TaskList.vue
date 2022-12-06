<template>

  <v-container>

    <v-row>
      <v-col cols="1">#</v-col>
      <v-col cols="4">Date</v-col>
      <v-col cols="4">Category</v-col>
      <v-col cols="2">Amount</v-col>
      <v-col cols="1">...</v-col>
    </v-row>
    <v-row v-for="({category, dateCreated, amount}, id) in items"
    :key="id"
    >
      <v-col cols="1">{{ id +1 }}</v-col>
      <v-col cols="4">{{ dateCreated }}</v-col>
      <v-col cols="4">{{ category }}</v-col>
      <v-col cols="2">{{ amount }}</v-col>
      <v-col cols="1">...</v-col>
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
    initialize () {
      this.desserts = [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
        },
      ]
    },
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