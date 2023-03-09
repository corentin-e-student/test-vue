<template>
  <div>
    <AddField/>
    <b-button>Ajouter</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import AddField from '@/components/AddField.vue'

export default {
  name: 'HomeView',
  components: {
    AddField,
  }
}
</script>
