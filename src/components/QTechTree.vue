<template lang="pug">
  div
    q-tree(
      :nodes="techStackItems"
      node-key="id"
      :selected.sync="selectedId"
      default-expand-all
    )
      div(
        slot="default-header"
        slot-scope="prop"
        @click="selectNode(prop.node)"
      )
        div(
          class="text-weight-bold text-primary"
        ) {{ prop.node.name }}
</template>

<script>
import TechStackData from '@/data/TechnologyStack.json'
import TreeItem from './TreeItem.vue'

export default {
  name: "q-tech-tree",
  components: {
    TreeItem
  },
  data () {
    return {
      selectedId: null,
      techStackItems: TechStackData,
      selected: {
        description: null,
        note: null
      }
    }
  },
  methods: {
    selectNode (node) {
      let selected = {
        name: node.name,
        description: node.description,
        note: node.note
      }
      this.$store.dispatch('setTechItem', selected)
    }
  },
  watch: {
    selectedId (val) {
      node = getNodeByKey(val)
      let selected = {
        name: node.name,
        description: node.description,
        note: node.note
      }
      this.$store.dispatch('setTechItem', selected)
    }
  }
}
</script>
