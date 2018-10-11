<template lang="pug">
  #app
    app-header
    .section.is-medium
      router-view
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
