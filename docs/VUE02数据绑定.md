## Vue数据绑定，事件及方法
1. 普通数据绑定{{}}
2. 属性绑定v-bind:key
3. HTML数据绑定html
4. 文本数据绑定text
5. 样式数据绑定class
6. 双向数据绑定（表单数据）
双向数据绑定  MVVM  vue就是一个MVVM框架
M   model
V    view

MVVM，model改变就会影响到view， view视图改变反过来影响model
双向数据绑定必须在表单里面使用
7. ref获取dom节点
8. 属性绑定，方法绑定
```shell
v-bind:src="http://www.baidu.com"
:src="http://www.baidu.com"

v-on:click="getMsg()"
@click="getMsg()"
```
9. 事件对象
```shell
<button v-on:click="getEvent($event)">获取事件对象</button>
```