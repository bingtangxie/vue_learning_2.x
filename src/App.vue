<template>
  <div id="hello">
    <hr/>
    <!-- 数据绑定 -->
    {{ msg }}
    <br/>
    {{ obj.name }}
    <br/>

    <hr/>
    <!-- 循环渲染数据 -->
    <ul>
      <li v-for="(item, index) in list " v-bind:key="index"> {{ item }}</li>
    </ul>
    <!-- 嵌套循环 -->
    <hr/>
    <ul>
      <li v-for="(item, index) in list2" v-bind:key="index">
        <ol>
          {{ item.cata }}
          <li v-for="(it, index) in item.list" v-bind:key="index">
            {{ it}}
          </li>
        </ol>
      </li>
    </ul>
    <hr/>
    <!-- 绑定属性 -->
    <div v-bind:title="title">鼠标瞄上去看看</div>
    <hr/>
    <div v-html="html"></div>
     <hr/>
    <div v-text="text">跟{{text}}方式绑定数据是一样的</div>
    <!-- 绑定样式 -->
    <hr/>
    <div v-bind:class="{'red': flag, 'blue': !flag}">我是一个带样式的div</div>
    <hr/>
    <ul>
      <li v-for="(item, index) in list2" v-bind:key="index" :class="{'red': index==0}">
        <ol>
          {{ item.cata }}
          <li v-for="(it, index) in item.list" v-bind:key="index">
            {{ it}}
          </li>
        </ol>
      </li>
    </ul>
    <hr/>
    <!-- 注意：双向数据绑定只能用在表单元素，否则会影响其他地方的数据 -->
    <p>修改以下文本框中的数据，该页面第一行的数据也会改变，因为绑定的是同一个数据</p>
    <input type="text" v-model="msg"/>
    <hr/>
    <input type="text" v-model="msg2"/>
    <!-- 通过双向绑定获取或修改数据 -->
    <button v-on:click="getMsg()">获取文本框中的数据</button>
    <button v-on:click="setMsg()">修改文本框中的数据</button>
    <hr/>
    <br/>
    <!-- 通过ref获取dom节点，获取数据 -->
    <input type="text" ref="userinfo"/>
    <div ref="box">我是一个box</div>
    <button v-on:click="getInputValue()">获取文本框数据</button>
    <!-- 事件对象 -->
    <hr/>
    <br/>
    <!-- 注意：使用的是$event而不是event -->
    <button v-on:click="getEvent($event)">获取事件对象</button>
    <hr/>
    <br/>
    <h1>TodoList</h1>
    <v-todo />
    <!-- 组件传值 -->
    <hr/>
    <br/>
    <v-home />
    <!-- 路由 -->
    <hr/>
    <br/>
    <h1> 路由演示 </h1>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";  // 引入组件
import Home from "./Home.vue";
// console.log(Home)
export default {
  // name: 'hello',
  data () {
    return {
      msg: 'Hello World !!!',
      obj: {
        name: "zhangsan"
      }, 
      list: ["111", "222", "333"],
      list2: [
        {
          cata: "国内新闻",
          list: ["111", "2222", "333", "444"]
        },
            {
          cata: "国外新闻",
          list: ["111", "2222", "333", "444"]
        },
      ],
      title: "我是一个title",
      html: "<h2>我是一个HTML元素</h2>",
      text: "我是文本",
      flag: true,
      msg2: "1111",
    }
  }, methods: {
    getMsg(){
      alert(this.msg2)
    },
    setMsg(){
      this.msg2 = "我是改变后的数据"
    },
    getInputValue(){
      this.$refs.box.style.background = "red"
      alert(this.$refs.userinfo.value)
    },
    getEvent(e){
      alert(e.srcElement)
      e.srcElement.style.background = 'red'
    }
  },components: {   // 注册组件
    'v-todo': TodoList,
    'v-home': Home,
  }
}
</script>

<style lang="scss">
  .red{
    color: red;
  }
  .blue{
    color: blue;
  }
</style>
