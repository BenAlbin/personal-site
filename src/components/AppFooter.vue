<template lang="pug">
  footer(
    class="footer row justify-center no-wrap bg-dark"
  )
    .col-3
    div(class="column q-ml-auto")
      p(
        class="row no-wrap justify-center"
      )
        social-bar(
          class="bg-faded"
        )
      p(
        class="row justify-center"
      ) &copy; 2018
    a(
      href="https://buttercms.com"
      class="q-ml-auto col-3"
    )
      img(
        src="https://cdn.buttercms.com/RyJ7UhcVTCRqrCFXwgCo"
        class="full-width"
      )
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
</style>
