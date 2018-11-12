<template lang="pug">
  q-page(padding)
    .flex-container
      q-tech-tree.tech-tree
      div.description-container
        tech-desc.tech-desc
</template>

<script>
import TechTree from '@/components/TechTree.vue'
import TechDesc from '@/components/TechDescription.vue'
import QTechTree from '@/components/QTechTree.vue'

export default {
  components: {
    TechTree,
    TechDesc,
    QTechTree
  }
}
</script>

<style scoped lang="stylus">
.flex-container
  display flex
  flex-direction row
  flex-wrap nowrap
  justify-content center
  align-items start

  .tech-tree
    width 200px
    margin-left 5px
    margin-right 5px

  .description-container
    width 500px
    margin-left 5px
    margin-right 5px

    .tech-desc
      width 500px
      position fixed
</style>
