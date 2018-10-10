<template>
  <tree-item
    class="item"
    :model="techStackItems"
  >
  </tree-item>
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
