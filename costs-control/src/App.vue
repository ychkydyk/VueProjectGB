<template>
  <div id="app">
     <header>
        <nav>
          <router-link class="router-link" to="dashboard"> Dashboard </router-link>
          <router-link class="router-link" to="about"> About </router-link>
          <router-link class="router-link" to="notfound"> Not Found </router-link>
        </nav>
     </header>
<modal-window-component  :componentName="componentName" :settings="modalSettings"/>
     <main>
       <router-view/>
     </main>
   </div>
</template>

<script>


import ModalWindowComponent from "@/components/ModalWindowComponent";
export default {
  name: 'App',
  components: {
    ModalWindowComponent
  },
  data: () =>({
    addShowForm: false,
    modalSettings: {},
    componentName: '',
    page: 'dashboard',
    }),

  methods: {
    onShown(propsData) {
      const {settings,name} = propsData
      this.componentName = name
      this.modalSettings = settings
      },
    onHide() {
      this.modalSettings= {}
      this.componentName = ''
    }


  },

  mounted(){
    this.$modal.EventBus.$on('shown', this.onShown)
    this.$modal.EventBus.$on('hide', this.onHide)
  }
  };

</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link {
  padding: 5px;
}
.router-link:visited {
  color: #00f;
}
  nav {
  margin-bottom: 15px;
}

</style>
