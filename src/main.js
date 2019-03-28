import Vue from 'vue';
import App from './App.vue';
import router from './router';
import CompanyService from './services/CompanyService';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: { App },
  template: '</App>',
  router,
  render: h => h(App),
}).$mount('#app');
