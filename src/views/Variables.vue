<template>
  <div class="variables">
    <h1>Variables Page</h1>
    <v-navigation-drawer app v-if="isLoggedIn"/>
    <v-container align-content-space-around class="blue-grey darken" app>
      <v-layout row wrap>
        <v-spacer/>
        <v-flex xs12 sm5 md3 lg2>
          <v-text-field
            flat
            label="Szukaj"
            prepend-inner-icon="search"
            solo-inverted
          ></v-text-field>
        </v-flex>
        <v-spacer/>
        <v-flex xs12 sm6 md4 lg2>
          <v-combobox
            v-model="selectSection"
            :items="itemsSection"
            label="Wybierz sekcje"
          ></v-combobox>
        </v-flex>
        <v-spacer/>
        <v-flex xs12 sm6 md4 lg2>
          <v-combobox
            v-model="selectType"
            :items="itemsType"
            label="Wybierz typ"
          ></v-combobox>
        </v-flex>
        <v-spacer/>
      </v-layout>
      <v-layout justify-center>
        <v-btn>
          Filter
        </v-btn>
      </v-layout>
    </v-container>
    <ShowElement v-for="variable in variables" :key="variable._id" :variable="variable"/>
  </div>
</template>
<script>
import ShowElement from '../components/ShowElement.vue'
import axios from 'axios'
export default {
  components: {
    ShowElement
  },
  data () {
    return {
      variables: '',
      selectSection: 'każda',
      selectType: 'każdy',
      itemsSection: [
        'fizyka',
        'matematyka',
        'chemia',
        'informatyka',
        'każda'
      ],
      itemsType: [
        'szkoła podstawowa',
        'gimnazjum',
        'liceum',
        'studia',
        'każdy'
      ]
    }
  },
  mounted: function() {
    axios({url: 'http://localhost:3000/variables', method: 'GET' }).then(resp => {
      this.variables = resp.data
    })
  },
  computed : {
    isLoggedIn : function(){return this.$store.getters.isLoggedIn}
  }
}
</script>
