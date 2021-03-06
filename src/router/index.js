import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
