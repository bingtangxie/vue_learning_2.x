VUE01-环境搭建
1. nodejs
2. vue-cli
3. vue init webpack program_name
4. vue init webpack-simple program_name
5. 项目目录结构分析
```shell
bingtang@B85M:/data/vue_learning/tutorial$ tree -I node_modules
.
├── index.html
├── package.json
├── README.md
├── src
│   ├── App.vue			  （根组件）
│   ├── assets            （静态资源）
│   │   └── logo.png
│   └── main.js				（编译入口文件）
└── webpack.config.js		（编译配置文件）
```
6. 安装Vetur解析vue代码（VScode）
7. Vue组件文件介绍与解析
Vue组件文件一般可以有三部分组成：
template	vue模板： 主要由HTML标签组成， 所有的内容被一个根组件包起来
script		 vue代码区域，数据区
style		CSS样式区域


App.vue
```shell
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
```
8. Hello World