import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home.vue'
import Blog from '@/pages/blog/index.vue'
import BlogPost from '@/pages/blog/post/index.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    name: 'home', 
    component: Home 
  },
  { 
    path: '/blog',
    name: 'blog-home', 
    component: Blog },
  { 
    path: '/blog/:slug',
    name: 'blog-post', 
    component: BlogPost 
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
