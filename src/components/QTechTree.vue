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
          class="text-weight-bold text-grey-10"
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
        treeItems: TechStackData
      }
    },
    watch: {
      selectedId (val) {
        if (val) {
          let { name, logo_url, description, note } = this.$refs.qTechTree.getNodeByKey(val)
          let selected = {
            name: name,
            logo_url: logo_url,
            description: description,
            note: note
          }
          this.$store.dispatch('setTechItem', selected)
        } else {
          this.$store.dispatch('setTechItem', null)
        }
      }
    }
  }
</script>
