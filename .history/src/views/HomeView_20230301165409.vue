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

export default {
  name: 'HomeView',
/* components: {
  TodoList
} */
components: {
  AddToolField
  ToolsList
}
}
</script>
