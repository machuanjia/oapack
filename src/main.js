// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import { Button, Table } from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(BootstrapVue)
Vue.component('Button', Button)
Vue.component('Table', Table)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
