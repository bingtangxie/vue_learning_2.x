<template>
  <div id="home">
    {{ msg }} <button @click="getMsg()">获取子组件值</button>
    <hr/>
    <br/>
    <v-header :header="HomeMsg" ref="header"/>
  </div>
</template>
<script>
import Header from './Header.vue';
  export default {
    data() {
      return {
        msg: "我是Home组件",
        HomeMsg: "我是Home组件传递过来的值"
      }
    }, components: {
      'v-header': Header,
    }, methods: {
      getMsg(){
        alert(this.$refs.header.msg)
      }
    }
  }
</script>

<style>

</style>