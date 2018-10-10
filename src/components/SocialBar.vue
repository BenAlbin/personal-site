<template>
  <v-card>
    <v-card-actions>
      <social-button
        v-for="(social, index) in $options.socials"
        v-bind:socialUrl="social.socialUrl"
        v-bind:socialIcon="social.socialIcon"
        v-bind:key="index"
      />
    </v-card-actions>
  </v-card>
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
