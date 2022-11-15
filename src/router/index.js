import Vue from 'vue'
import VueRouter from 'vue-router'
import rickAndMorty from "../components/rickAndMorty.vue";
import character from "../components/character.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:character,rickAndMorty,
    
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
