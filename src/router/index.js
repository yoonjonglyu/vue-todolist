import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDoHeader from '../components/todoheader.vue'
import ToDoInput from '../components/todoinput.vue'
import ToDoList from '../components/todolist.vue'
import ToDoFooter from '../components/todofooter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ToDoList',
    components: {
      header : ToDoHeader,
      input : ToDoInput,
      default : ToDoList,
      footer : ToDoFooter
    }
  },

]

const router = new VueRouter({
  routes
})

export default router
