<template lang="pug">
  .container
    .grid-container
      q-tech-tree.tech-tree
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

<style>
.grid-container {
  display: grid;
  grid-template-columns: [first] 200px [line2] 500px;
  justify-content: center;
  align-items: start;
}
tech-tree {
  grid-row-start: 1;
  grid-column-start:1;
  grid-column-end: 2;
}
tech-desc {
  grid-row-start: 1;
}
</style>
