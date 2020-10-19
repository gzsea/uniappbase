import Vue from 'vue'
import App from './App'
import store from '../store'
import {request,uploadimage} from 'api/request.js'
import uView from "uview-ui";
import "./static/iconfont.css"

Vue.use(uView);
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
