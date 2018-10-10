<template lang="pug">
  v-btn(icon v-bind:href="socialUrl" target="_blank")
    i.social-icon.fab(:class="'fa-'.concat(socialIcon)")
</template>

<script>
export default {
  name: 'social-button',
  props: {
    socialIcon: {
      type: String
    },
    socialUrl: {
      type: String,
      required: true,

    }
  }
}
</script>

<style lang="stylus">
.social-icon
  font-size 32px
</style>
