<template>
  <v-flex xs12 sm6 md4 lg3>
    <v-card
    flat
    color="blue"
    elevation="5"
    style="margin: 20px">
    <v-card-title primary-title>
      <div>
        <div class="headline">{{ variable.name }}</div>
      </div>
      </v-card-title>
      <VueMathjax :formula="'$$'+variable.symbol+'$$'"/>
      <v-card-actions>
        <v-btn flat>Like</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import { VueMathjax } from 'vue-mathjax'
export default {
  components: {
    VueMathjax
  },
  props: ['variable', 'formula', 'pack'],
  methods: {
    mathjaxShow () {

    }
  }
}
</script>