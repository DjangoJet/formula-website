<template>
  <div class="packs">
    <h1>Packs Page</h1>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg2>
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
    </v-layout>
    <v-layout justify-center>
      <v-btn>
        Filter
      </v-btn>
    </v-layout>
    <v-layout row wrap>
        <PackElement v-for="pack in packs" :pack="pack" :key="pack._id"/>
    </v-layout>
  </div>
</template>
<script>
import PackElement from '../components/PackElement.vue'
export default {
  components: {
      PackElement
  },
  data () {
    return {
      packs: '',
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
      this.$http.get('http://localhost:3000/packs').then(response => {
        this.packs = response.body
        console.log(this.packs)
    })
  }
}
</script>