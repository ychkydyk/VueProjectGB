<template>
  <transition name="fade">
    <div v-if="isShown" class="modal-window">
        <button v-on:click="hide()">Close</button>
      <TaskFormAdd/>
    </div>
  </transition>
</template>

<script>

import TaskFormAdd from "@/components/TaskFormAdd";
export default {
    name: "ModalWindowComponent",
  components: {TaskFormAdd},
  data() {
        return {
          isShown: false,
          shownId: 'add'
        }
    },
  methods: {
    show(shownId) {
      if(shownId === this.shownId) {
        this.isShown = true
      }
    },
    hide() {
        this.isShown = false

    },
  },
mounted(){
    this.$modal.EventBus.$on('modalShow', this.show)
    this.$modal.EventBus.$on('modalHide', this.hide)
}
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave {
  opacity: 1;
}
</style>