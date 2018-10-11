<template lang="pug">
  nav(
    role="navigation"
    class="navbar is-dark"
    )
    div.navbar-brand
      div.navbar-item Ben Albin
    div.navbar-menu
      a.navbar-item Home
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
.navbar-brand
  margin-left 30%
  font-size 32px
.navbar-menu
  margin-left 5%
.navbar-item
  color white
</style>
