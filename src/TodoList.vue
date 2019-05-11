<template>
  <div id='todolist'>
    <input type="text" v-model="todo">
    <button v-on:click="addTodoList()">+增加</button>
    <hr/>
    <h2>待完成：</h2>
    <ul>
      <li v-for="(item, index) in list" v-bind:key="index" v-if="item.status == 0">
        {{ item.todo }}<button @click="toFinish(index)">已完成</button><button @click="deleteFromList(index)">删除</button>
      </li>
    </ul>
    <h2>已完成：</h2>
    <ul>
      <li v-for="(item, index) in list" v-bind:key="index" v-if="item.status == 1">
        {{ item.todo }}<button @click="toUnFinish(index)">待完成</button><button @click="deleteFromList(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import storage from "./utils/storage.js";
export default {
  data() {
    return {
      todo: '',
      list: [],
    }
  }, methods: {
    addTodoList(){
      if (this.todo !== ''){
        this.list.push({"todo": this.todo, "status": 0})
        storage.set('list', this.list)
      }
    },
    toFinish(index){
      this.list[index].status = 1
      storage.set('list', this.list)
    },
    toUnFinish(index){
      this.list[index].status = 0
      storage.set('list', this.list)
    },
    deleteFromList(index){
      this.list.splice(index, 1)
      storage.set('list', this.list)
    }
  }, mounted() {
    let list = storage.get('list')
      this.list = list
    }
}
</script>
<style lang="scss">

</style>


