<template>
  <div id='todolist'>
    <input type="text" v-model="item">
    <button v-on:click="addTodoList()">+增加</button>
    <hr/>
    <h2>待完成：</h2>
    <ul>
      <li v-for="(value, index) in list_todo" v-bind:key="index">
        {{ value }}<button @click="transToFinish(index)">已完成</button><button @click="deleteFromTodoList(index)">删除</button>
      </li>
    </ul>
    <h2>已完成：</h2>
    <ul>
      <li v-for="(value, index) in list_finish" v-bind:key="index">
        {{ value }}<button @click="deleteFromListFinish(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: '',
      list_todo: [],
      list_finish: [],
    }
  }, methods: {
    addTodoList(){
      if (this.item !== ''){
        console.log(this.item)
        this.list_todo.push(this.item)
      }
    },
    transToFinish(index){
      let item_finish = this.list_todo[index]
      this.list_todo.splice(index, 1)
      this.list_finish.unshift(item_finish)
    },
    deleteFromTodoList(index){
      this.list_todo.splice(index, 1)
    },
    deleteFromListFinish(index){
      this.list_finish.splice(index, 1)
    }
  }
}
</script>
<style lang="scss">

</style>


