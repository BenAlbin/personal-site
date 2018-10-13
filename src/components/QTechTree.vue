<template lang="pug">
  div
    q-tree(
      :nodes="treeItems"
      node-key="id"
      :selected.sync="selectedId"
      handler="(node) => selectNode(node)"
      default-expand-all
      ref="qTechTree"
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

export default {
  name: "q-tech-tree",
  components: {
  },
  data () {
    return {
      selectedId: null,
      treeItems: TechStackData,
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
  }
}
</script>
