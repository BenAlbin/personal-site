<template lang="pug">
  q-toolbar(
    color="dark"
    class="row no-wrap q-py-none"
  )
    .col-3
    q-toolbar-title(
      shrink
    ) Ben Albin
    .col
    q-tabs(
      color="dark"
      align="center"
    )
      q-route-tab(
        slot="title"
        to="/"
        label="Home"
      )
      q-route-tab(
        slot="title"
        to="/blog"
        label="Blog"
      )
    .col-3
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      indexActive: 0
    }
  }
}
</script>

<style lang="stylus">
</style>
