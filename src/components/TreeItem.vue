<template lang="pug">
  li
    div(@click="toggle")
      span(v-if="isFolder" class="tree-icon") {{ open ? '˅ ' : '> '}}
      span {{ model.name }}
    ul(v-show="open" v-if="isFolder")
      tree-item(
        class="item"
        v-for="(model, index) in model.children"
        :key="index"
        :model="model"
      )
</template>

<script>
export default {
  name: "tree-item",
  props: {
    model: {
      type: Object
    }
  },
  data () {
    return {
      open: false
    }
  },
  computed: {
    isFolder () {
      return this.model.children &&
        this.model.children.length
    }
  },
  methods: {
    toggle () {
      this.$store.dispatch('setTechItem', this.model)
      if (this.isFolder) {
        this.open = !this.open
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.bold
  font-weight bold

.tree-icon
  font-weight bold

ul
  list-style-type none
  padding-left 1em
  line-height 1.5em

li
  list-style-type none
</style>
