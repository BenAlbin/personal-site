<template lang="pug">
  footer.footer
    div(class="content has-text-centered")
      p
        social-bar
      p &copy; 2018
</template>

<script>
import SocialBar from '@/components/SocialBar.vue'

export default {
  name: 'AppFooter',
  components: {
    SocialBar
  }
}
</script>

<style scoped lang="stylus">
.footer
  position fixed
  bottom 0
  width 100%
  height fit-content
  padding 0px
p
  margin-bottom 0px
</style>
