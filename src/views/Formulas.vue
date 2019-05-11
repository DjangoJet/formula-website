<template>
  <div class="formulas">
    <h1>Formulas Page</h1>
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
    <v-layout row wrap>
      <FormulaElement v-for="formula in formulas" :formula="formula" :key="formula._id"/>
    </v-layout>
  </div>
</template>

<script>
import FormulaElement from '../components/FormulaElement.vue'
export default {
  components: {
    FormulaElement
  },
  data () {
    return {
      formulas: '',
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
      this.$http.get('http://localhost:3000/formulas').then(response => {
        this.formulas = response.body
    })
  }
}
</script>

