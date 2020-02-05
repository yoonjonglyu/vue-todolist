<template>
  <div id="app">
    <router-view name="header"/>
    <main role="main">
      <router-view name="input"/>
      <router-view/>
    </main>
    <router-view name="footer"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      todoItem : []
    }
  }
}
</script>
<style>
main {
  width: 90%;
  margin: 0 auto;
}
</style>
