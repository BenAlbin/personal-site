<template>
  <v-card>
    <v-card-actions>
      <social-button
        v-for="(social, index) in socials"
        v-bind:socialUrl="social.socialUrl"
        v-bind:socialIcon="social.socialIcon"
        v-bind:key="index"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
import SocialButton from './SocialButton.vue'

export default {
  name: 'SocialBar',
  data () {
    return {
      socials: [
        {
          socialUrl: "https://github.com/BenAlbin",
          socialIcon: "github"
        },
        {
          socialUrl: "https://www.linkedin.com/in/ben-albin-ab788673/",
          socialIcon: "linkedin"
        }
      ]
    }
  },
  components: {
    SocialButton
  }
}
</script>
