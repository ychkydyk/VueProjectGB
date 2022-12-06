<template>
  <v-app>
    <v-app-bar
      app
      color="green"
      flat
      dark
    >
      <v-btn :ripple="false" plain to="/Dashboard">Dashboard</v-btn>
      <v-btn :ripple="false" plain to="/About">About</v-btn>
      <v-btn :ripple="false" plain to="/Notfound">NotFound</v-btn>
    </v-app-bar>

    <v-main>
  <v-container>
      <router-view/>
  </v-container>
    </v-main>
  </v-app>
</template>

<script>

// import MyButton from "@/components/MyButton.vue";
export default {
  name: 'App',
  // components: {MyButton},
  data: () => ({
    //
  }),
};
</script>
