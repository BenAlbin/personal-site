<template lang="pug">
  q-page(padding)
    div(class="row justify-center")
      .col-2
      div(
        class="col"
      )
        h1 {{ post.data.title }}
        h4 {{ post.data.author.first_name }} {{ post.data.author.last_name }}
        div(
          v-html="post.data.body"
        )
      .col-2
</template>

<script>
  import { butter } from '@/buttercms'
  export default {
    name: 'blog-post',
    data() {
      return {
        post: {}
      }
    },
    methods: {
      getPost() {
        butter.post.retrieve(this.$route.params.slug)
          .then(res => {
            this.post = res.data
          })
      }
    },
    created() {
      this.getPost()
    }
  }
</script>

<style lang="stylus">
img
  max-width 100%
</style>