import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch, faNewspaper } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faNewspaper);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
