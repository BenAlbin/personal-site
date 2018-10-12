<template lang="pug">
  div.container
    social-button(
      v-for="(social, index) in $options.socials"
      v-bind:socialUrl="social.socialUrl"
      v-bind:socialIcon="social.socialIcon"
      v-bind:key="index")
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
.container
  width fit-content
  height fit-content
  margin-top 0px
  margin-bottom 0px
  padding-top 5px
  padding-bottom 5px
</style>
