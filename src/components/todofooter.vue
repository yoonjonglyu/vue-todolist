<template>
  <footer id="footer">
    <button v-on:click="clearAll">CLEAR ALL</button>
  </footer>
</template>

<script>
export default {
  name : 'todoFooter',
  methods : {
    clearAll(){
      this.$emit('removeall');
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  text-align:  center;
}
button {
  width: 100px;
  height: 40px;
  background: none;
  border: 2px rgba(245, 60, 60, 0.623) solid;
  color: red;
}
</style>
