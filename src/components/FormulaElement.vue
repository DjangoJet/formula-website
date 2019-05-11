<template>
    <v-flex xs12 sm6 md4 lg3>
        <v-card
        flat
        color="blue"
        elevation="5"
        style="margin: 20px">
            <v-card-title primary-title>
            <div>
                <div class="headline">{{ formula.name }}</div>
            </div>
            </v-card-title>
            <VueMathjax :formula="formatFormula()"/>
            <v-card-actions>
              <v-btn flat>Like</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
import {VueMathjax} from 'vue-mathjax'
export default {
    components: {
        VueMathjax
    },
    props: ['formula'],
    methods: {
        formatFormula: function() {
            var i;
            for (i = 0; i < this.formula.variables.length; i++) {
                this.formula.formula = this.formula.formula.replace(`item${i}`, this.formula.variables[i].symbol)
            }
            return "$$"+this.formula.formula+"$$"
        },
        formatSymbol: function(symbol) {
            return "$"+symbol+"$"
        }
    }
}
</script>
