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
    <v-menu open-on-hover bottom offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          dark
          v-on="on"
        >
          Variables
        </v-btn>
      </template>

      <v-list>
        <v-list-tile
          v-for="(item, index) in variablesItems"
          :key="index"
          @click="goTo(item.path)"
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-menu open-on-hover bottom offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          dark
          v-on="on"
        >
          Formulas
        </v-btn>
      </template>

      <v-list>
        <v-list-tile
          v-for="(item, index) in formulasItems"
          :key="index"
          @click="goTo(item.path)"
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-menu open-on-hover bottom offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          dark
          v-on="on"
        >
          Packs
        </v-btn>
      </template>

      <v-list>
        <v-list-tile
          v-for="(item, index) in packsItems"
          :key="index"
          @click="goTo(item.path)"
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-btn
      flat
      :href="host"
    >
      <span class="mr-2">Me</span>
    </v-btn>
    <v-spacer/>
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
        },
        variablesItems: [
            { title: 'All', path: 'variables' },
            { title: 'Owned' },
            { title: 'Liked' }
        ],
        formulasItems: [
            { title: 'All', path: 'formulas' },
            { title: 'Owned' },
            { title: 'Liked' }
        ],
        packsItems: [
            { title: 'All', path: 'packs' },
            { title: 'Owned' },
            { title: 'Liked' }
        ]
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
    },
    goTo: function (path) {
        this.$router.push(path)
    }
  },
  computed : {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
  }
}
</script>
