<template lang='pug'>
  q-page(padding)
    .blog-home
      h1 {{ page_title }}
      div(
        v-for="(post, index) in posts"
        :key="post.slug + '_' + index"
      ) 
        router-link(
          :to="'/blog/' + post.slug"
        )
          h2 {{ post.title }}
          p {{ post.summary }}
</template>

<script>
  import { butter } from '@/buttercms'
  export default {
    name: 'blog-home',
    data() {
      return {
        page_title: 'blog',
        posts: []
      }
    },
    methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 10
        }).then((res) => {
          this.posts = res.data.data
        })
      }
    },
    created() {
      this.getPosts()
    }
  }
</script>

<style lang='stylus'>
</style>
