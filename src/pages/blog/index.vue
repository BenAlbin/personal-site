<template lang='pug'>
  q-page(padding)
    div(class="row justify-center")
      .col-2
      .blog-home.col
        h3(
          class="q-my-md"
        ) {{ page_title }}
        div(
          class="row justify-between"
        )
          q-card(
            class="q-mx-none"
            inline
            style="width: 32%; height: 300px"
            @click.native="$router.push({ path: '/blog/' + post.slug })"
            v-for="(post, index) in posts"
            :key="post.slug + '_' + index"
          )
            q-card-title {{ post.title }}
            q-card-separator
            q-card-main {{ post.summary }}
      .col-2
</template>

<script>
  import { butter } from '@/buttercms'
  export default {
    name: 'blog-home',
    data() {
      return {
        page_title: 'A few quick blog posts',
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
