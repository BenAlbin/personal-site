<template lang="pug">
  .q-app
    q-layout(
      view="hhh lpr fff"
    )
      q-layout-header
        app-header
      q-page-container
        router-view
      q-layout-footer
        app-footer
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import SocialBar from './components/SocialBar'
import TechTree from './components/TechTree'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    SocialBar,
    TechTree,
    AppFooter
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
.section.is-medium
  padding-top 2rem
</style>
