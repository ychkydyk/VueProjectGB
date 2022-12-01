<template>
  <transition name="fade">
    <div v-if="componentName" class="modal-window">
      <div class="header">
        {{ settings.title }}
      </div>
      <div class="content">
        <task-form-add v-if="componentName === 'TaskFormAdd'"/>
        <auth-form v-if="componentName === 'AuthForm'"/>
      </div>
      <div class="footer">
        <button @click="onClose">Close</button>
      </div>

    </div>
  </transition>
</template>

<script>

import TaskFormAdd from "@/components/TaskFormAdd";
import AuthForm from "@/components/AuthForm";
export default {
    name: "ModalWindowComponent",
  components: {AuthForm, TaskFormAdd},
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