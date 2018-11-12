<template lang="pug">
  footer(
    class="footer bg-dark"
  )
    div(class="column")
      p(
        class="row justify-center"
      )
        social-bar(
          class="bg-faded"
        )
      p(
        class="row justify-center"
      ) &copy; 2018
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
  bottom 0
  width 100%
  height fit-content
  padding 0px
p
  margin-bottom 0px
</style>
