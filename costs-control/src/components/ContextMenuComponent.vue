<template>
<div class="context" v-if="isShow">
  <div class="context-item"
       v-for="(item, idx) in items"
       :key="idx"
       @click="onClick(item)"
  >
    {{ item.text }}
  </div>
 </div>
</template>

<script>
export default {
  name: "ContextMenuComponent.vue",
  data() {
    return {
      isShow: false,
      items: [] //изначально пустой массив, заполняется в зависимости от колличества пунктов в конекстном меню
    };
  },
  methods: {
    onClick(item) {
      console.log(item);
    },
    onShown({items}){
      this.items = items
      this.isShow = true

    },
    onClose(){
      this.items = []
      this.isShow = false
    }
  },
  mounted() {
    this.$context.EventBus.$on('shown', this.onShown)
    this.$context.EventBus.$on('close', this.onClose)
  },
  beforeDestroy() {
    this.$context.EventBus.$off('shown', this.onShown)
    this.$context.EventBus.$off('close', this.onClose)
  }
};
</script>

<style lang="scss" scoped>


.context {
  position: absolute;
  cursor: pointer;
}
</style>