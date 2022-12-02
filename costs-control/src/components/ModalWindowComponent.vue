<template>
    <div v-if="componentName" class="modal-window">
        <div class="header">
          {{ settings.title }}
        </div>
        <div class="content">
          <component :is="componentName"/>
        </div>
        <div class="footer">
          <button @click="onClose">Close</button>
        </div>
    </div>
</template>

<script>

export default {
    name: "ModalWindowComponent",
  components: {
    AuthForm:()=>import(/*webpackChunkName:"Auth"*/'@/components/AuthForm'),
    TaskFormAdd:()=>import(/*webpackChunkName:"TaskFormAdd"*/'@/components/TaskFormAdd')
  },
  props: {
      componentName: String,
      settings: Object
  },
  methods: {
  onClose() {
    this.$modal.hide()
    }
  },

}
</script>

<style lang="scss">

.modal-window {
  position: absolute;
  background-color: white;
  top: 15%;
  left: calc(50% - 150px) ;
  border: 1px solid #2c3e50;
  border-radius: 15px;
    padding-top: 25px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    width: 300px;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
    .button {
        width: 33%;
    }
}


</style>