<template>
  <div class="todoItem">
    <ul>
      <li v-for="(items, index) in list" v-bind:key="items">
        {{items}}
        <span class="remove" @click="removeItem(items, index)">
          X
        </span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name : 'todoList',
  props: ['list'],
  methods : {
    removeItem(item, index) {
      this.$emit('removeitem', item, index);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  width: 100%;
  margin: 18px 0;
  padding: 0;
  list-style: none;
}
li {
  width: 97%;
  height: 45px;
  margin: 8px 0;
  padding: 0 0 0 3%;
  line-height: 45px;
  font-size: 1rem;
  border: 0.5px rgb(221, 221, 221) solid;
  box-shadow: 1px 1px 2px 1px rgb(141, 130, 235);
}
li span {
  float: right;
  padding: 0 8px;
  font-size: 1.2rem;
  color: rgb(218, 63, 63);
  
}
</style>
