

require('./bootstrap');

window.Vue = require('vue');
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import VueRouter from 'vue-router'
Vue.use(ElementUI, {locale})
Vue.use(VueRouter)
import from 'moment'
Object.defineProperty(Vue.prototype, '$moment', { 
	get(){
		return this.$root.$moment
	}
})

const routes = []
const router = new VueRouter({
	base: 'home',
	mode: 'history',
	routes
});
$(window).on('load', function() {
	new Vue({
		data(){
			return {
				store:{
					state: {
						user: {},
						loading:false,
					},
					mutations: {
						handleLoading(state, data){
							state.loading = data
						}
					},
					dispatch(mutation, data = {}){//$root.store.dispath
						this.mutations[mutation](this.state, data)
					}
				}
			}
		},
		router,
		render: h => h(require('./components/App.vue').default)
	}).$mount('#app')
});

/*Vue.component('example-component', require('./components/ExampleComponent.vue').default);



const app = new Vue({
    el: '#app',
});*/
