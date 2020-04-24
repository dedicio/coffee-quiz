import Vue from 'vue';
import { Button } from 'buefy';
import 'buefy/dist/buefy.css';
import App from './App.vue';

Vue.use(Button);
Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount('#app');
