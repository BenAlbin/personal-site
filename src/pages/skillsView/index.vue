<template lang="pug">
  q-page(padding)
    div(class="row justify-between no-wrap q-my-md")
      .col-2
      q-tech-tree(
        class="col-3"
      )
      div(
        class="col-4"
        style=""
      )
        tech-desc(
          class="fixed full-height"
          style="width: 35%"
        )
      .col-2
</template>

<script>
import TechTree from '@/components/TechTree.vue'
import TechDesc from '@/components/TechDescription.vue'
import QTechTree from '@/components/QTechTree.vue'

export default {
  name: 'skills-view',
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