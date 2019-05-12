import Vue from 'vue'
import App from './App.vue'
// import TodoList from './TodoList.vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import News from './News.vue'


Vue.use(VueRouter)
const routes = [
  {path: '/home', component: Home},
  {path: '/news', component: News},
  {path: '*', redirect: '/home'}
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,     // 挂载路由
  render: h => h(App)
})
