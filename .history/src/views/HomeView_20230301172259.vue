<template>
  <!-- <div>
    <TodoList/>
  </div> -->
  <div>
    <AddToolField/>
    <ToolsList/>
  </div>
</template>

<script>
// @ is an alias to /src
/* import TodoList from '@/components/TodoList.vue' */
import AddToolField from '@/components/AddToolField.vue'
import ToolsList from '@/components/ToolsList.vue'
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'HomeView',
/* components: {
  TodoList
} */
methods: {
    ...mapMutations({
        resetTodoList: "todo/TODO_LIST_SET"
    }),
    ...mapActions("todo", [ "resetList"]),
},
components: {
  AddToolField,
  ToolsList
}
}
</script>
