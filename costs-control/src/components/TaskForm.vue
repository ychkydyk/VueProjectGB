<template>

  <transition name="fade">
    <div v-if="isShown" class="task-form">
        <button v-on:click="$modal.hide('add')">Close</button>
      <TaskFormAdd/>
    </div>
  </transition>
</template>

<script>

import TaskFormAdd from "@/components/TaskFormAdd";
export default {
    name: "TaskForm",
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
    hide(shownId) {
      if(shownId === this.shownId) {
        this.isShown = false
      }
    },


  },
mounted(){
    this.$modal.EventBus.$on('modalShow', this.show)
    this.$modal.EventBus.$on('modalHide', this.hide)

}
}
</script>

<style lang="scss">

.task-form {
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
  .category-select {
    width: 57%;
    margin: 10px;
  }
}
.btn-group {
  margin-top:20px;
  display: flex;
  :last-child {
    margin-left:10px;
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