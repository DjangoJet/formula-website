<template>
  <v-app>
    <NavBar v-if="!isLoggedIn"/>
    <LogNavBar v-if="isLoggedIn"/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import LogNavBar from './components/LogNavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    LogNavBar
  },
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('logout')
        }
        throw err;
      });
    });
  },
  computed : {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
  }
}
</script>
