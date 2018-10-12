<template lang="pug">
  div(v-if="selectedTech")
    .description
      header Description:
      div {{ selectedTech.description }}
    .notes
      header Note:
      div {{ selectedTech.personal_note }}
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
