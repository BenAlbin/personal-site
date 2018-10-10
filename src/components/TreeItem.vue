<template>
  <li>
    <div
      @click="toggle"
    >
      <span v-if="isFolder" class="tree-icon">{{ open ? '˅ ' : '> '}}</span>
      {{ model.name }}
    </div>
    <ul v-show="open" v-if="isFolder">
      <tree-item
        class="item"
        v-for="(model, index) in model.children"
        :key="index"
        :model="model"
      >
      </tree-item>
    </ul>
  </li>
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
      if (this.isFolder) {
        this.open = !this.open
      }
    }
  }
}
</script>

<style>
.bold {
  font-weight: bold;
}
.tree-icon {
  font-weight: bold;
}
ul {
  list-style-type: none;
}
li {
  list-style-type: none;
}
</style>
