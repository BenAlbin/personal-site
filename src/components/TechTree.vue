<template lang="pug">
  tree-item(
    class="item"
    :model="techStackItems")
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
      techStackItems: {
        name: "Technologies",
        children: TechStackData
      }
    }
  }
}
</script>
