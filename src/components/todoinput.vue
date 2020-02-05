<template>
  <form class="todoinput">
    <div class="inputbox">
      <input type="text" v-model="todoinput" v-on:keyup.enter="addToDo" placeholder="할일을 적어보세요."/>
      <span v-on:click="addToDo">입력</span>
    </div>
  </form>
</template>

<script>
export default {
  name : 'todoInput',
  data() {
    return {
      todoinput : ''
    }
  },
  methods : {
    addToDo(){
      const item = this.todoinput.trim();
      
      if(item !== ''){
        this.$emit('additem', item);
        this.clearTodo();
      }
    },
    clearTodo() {
      this.todoinput = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputbox {
  display: block;
  width: 100%;
  height: 50px;
  border: 0.5px rgb(185, 185, 185) solid;
  box-shadow: 0.5px 0.5px 3px;  
}
input {
  float: left;
  width: 88%;
  height: 50px;
  padding: 0 0 0 2%;
  border: none;
  background: none;
  font-size: 1.3rem;
  line-height: 50px;
}
.inputbox span {
  display: block;
  float: left;
  width: 10%;
  height: 26px;
  padding: 14px 0 10px 0;
  font-size: 0.8rem;
  color: white;
  text-align: center;
  background: rgb(114, 60, 184);
}
</style>
