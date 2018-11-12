<template lang="pug">
  q-page(padding)
    .blog-post
      h1 {{ post.data.title }}
      h4 {{ post.data.author.first_name }} {{ post.data.author.last_name }}
      div(
        v-html="post.data.body"
      )
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
.blog_post
  width 50%
</style>