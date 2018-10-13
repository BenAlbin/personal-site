<template lang="pug">
  div(v-if="selectedTech")
    q-card
      q-card-title {{ selectedTech.name }}
        span(slot="subtitle") {{ selectedTech.description }}
      q-card-main
       p {{ selectedTech.note }}
</template>

<script>
export default {
  name: "tech-desc",
  data () {
    return {
    }
  },
  computed: {
    selectedTech () {
      return this.$store.getters.selectedTechItem
    }
  }
}
</script>
