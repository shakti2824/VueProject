
import Vue from 'vue'
import Router from 'vue-router'
import selectServer from './components/selectServer'

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'server',
      component: selectServer
    },
  ]
})
