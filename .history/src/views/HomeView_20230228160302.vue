<template>
  <div>
    <TodoList/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddField from '@/components/AddField.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'HomeView',
  components: {
    AddField,
    TodoList,
  }
}
</script>
