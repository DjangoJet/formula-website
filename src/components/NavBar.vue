<template>
  <v-toolbar flat app dark>
    <v-toolbar-side-icon
      class="hidden-lg-and-up"
      @click="drawer = true"
    >
    </v-toolbar-side-icon>
    <v-btn
      flat
      :href="host"
    >
      <span class="mr-2">Home</span>
    </v-btn>
    <v-btn
      flat
      :href="addToHost(endpoint.variables)"
    >
      <span class="mr-2">Variables</span>
    </v-btn>
    <v-btn
      flat
      :href="addToHost(endpoint.formulas)"
    >
      <span class="mr-2">Formulas</span>
    </v-btn>
    <v-btn
      flat
      :href="addToHost(endpoint.packs)"
    >
      <span class="mr-2">Packs</span>
    </v-btn>
    <v-spacer/>
    <v-btn
    v-if="!isLoggedIn"
      flat
      :href="addToHost(endpoint.login)"
    >
      <span class="mr-2">Login</span>
    </v-btn>
    <v-btn
    v-if="isLoggedIn"
      flat
      @click="logout"
    >
      <span class="mr-2">Logout</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      host: 'http://localhost:8080',
      endpoint: {
        variables: '/variables',
        formulas: '/formulas',
        packs: '/packs',
        login: '/login'
      }
    }
  },
  methods: {
    addToHost: function(added) {
      return this.host+added
    },
    logout: function () {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/login')
      })
    }
  },
  computed : {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
  }
}
</script>
