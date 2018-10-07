<template>
  <v-btn icon v-bind:href="socialUrl" target="_blank">
    <i :class="['social-icon', 'fab', 'fa-'.concat(socialIcon)]"></i>
  </v-btn>
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

<style>
.social-icon {
  font-size: 32px;
}
</style>
