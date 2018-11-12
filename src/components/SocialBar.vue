<template lang="pug">
  div(class="container row no-wrap")
    social-button(
      v-for="(social, index) in $options.socials"
      :socialUrl="social.socialUrl"
      :socialIcon="social.socialIcon"
      :key="index"
    )
</template>

<script>
import SocialButton from './SocialButton.vue'
import socialsData from '@/data/Socials.json'

export default {
  name: 'SocialBar',
  socials: socialsData,
  data () {
    return {
    }
  },
  components: {
    SocialButton
  }
}
</script>

<style scoped lang="stylus">
@import '~variables'
.container
  width fit-content
  height fit-content
  margin-top 0px
  margin-bottom 0px
  padding-top 5px
  padding-bottom 5px
</style>
