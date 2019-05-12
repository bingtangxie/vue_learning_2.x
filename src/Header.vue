<template>
  <div id="header">
    我是Header组件 -- {{ header }}
  </div>
</template>
<script>
    export default {
    data() {
      return {
        msg: "我是Header组件"
      }
    }, props: ['header']
  }
</script>

<style>

</style>