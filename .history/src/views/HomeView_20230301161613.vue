<template>
  <div>
    <AddToolField/>
    <ToolsList/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddToolField from '@/components/AddToolField.vue';
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'HomeView',
  components: {
    TodoList,
    AddToolField
}
}
</script>
