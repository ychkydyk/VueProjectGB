<template>
    <div class="task-list-wrapper">
      <div class="item" v-for="(item, idx) in items" :key="idx">
        <p>{{item.id}}</p>
        <p>{{item.dateCreated}}</p>
        <p>{{item.category}}</p>
        <p>{{item.amount }}$</p>
        <span class="dot" @click="callContextMenu($event, item)" >&#10247;</span>
        <ContextMenu></ContextMenu>
      </div>
      </div>
</template>

<script>
import ContextMenu from "./ContextMenu.vue";
export default {
    name: 'TaskList',
  components: {
    ContextMenu,
  },
    props: {
      items: {
        type: Array,
        default: ()=>([])
      }
    },
  mounted() {
    this.$context.EventEmitter.$on("show", this.show);
  },
  methods: {
    callContextMenu(event, item) {
      this.$context.show(event.currentTarget,item); // event.currentTarget для определения текущего элемента, на котором сработал event

    },
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