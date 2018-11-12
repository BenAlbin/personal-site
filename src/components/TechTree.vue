<template lang="pug">
  div
    tree-item(
      v-for="(model, index) in techStackItems"
      class="item"
      :model="model"
      key="id"
    )
</template>

<script>
import TechStackData from '@/data/TechnologyStack.json'
import TreeItem from './TreeItem.vue'

export default {
  name: "tech-tree",
  components: {
    TreeItem
  },
  data () {
    return {
      techStackItems: TechStackData
    }
  }
}
</script>
