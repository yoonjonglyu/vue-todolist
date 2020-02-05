<template>
  <div id="app">
    <router-view name="header"/>
    <main role="main">
      <router-view name="input" v-on:additem="addToDo"/>
      <router-view v-bind:list="todoItems" v-on:removeitem="removeItem"/>
    </main>
    <router-view name="footer" v-on:removeall="clearAll"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      todoItems : []
    }
  },
  created() {
    if(localStorage.length > 0){
      for(let int = 0; int < localStorage.length; int++){
        this.todoItems.push(localStorage.key(int));
      }
    }
  },
  methods : {
    addToDo(value) {
      localStorage.setItem(value, value);
      this.todoItems.push(value);
    },
    removeItem(item, index){
      localStorage.removeItem(item);
      this.todoItems.splice(index, 1);
    },
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    }
  }
}
</script>
<style>
body {
  background: rgba(206, 205, 205, 0.13);
}
main {
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  padding: 8px 0;
}
</style>
