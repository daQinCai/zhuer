import Vue from 'vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
// import Url from '@/config.js'
Vue.prototype.axios= axios
Vue.config.productionTip = false
Vue.use(Vant);
// Vue.use(Url);
new Vue({
  router
}).$mount('#app')
