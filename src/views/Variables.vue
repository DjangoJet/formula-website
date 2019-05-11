<template>
  <div class="variables">
    <h1>Variables Page</h1>
    <SortElement/>
    <ShowElement v-for="variable in variables" :key="variable._id" :variable="variable"/>
  </div>
</template>
<script>
import ShowElement from '../components/ShowElement.vue'
import SortElement from '../components/SortElement.vue'
export default {
  components: {
    ShowElement,
    SortElement
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
      this.$http.get('http://localhost:3000/variables').then(response => {
        this.variables = response.body
    })
  }
}
</script>
