<template>
  <div>
    <TotoVueComponent/>
    <b-button>Ajouter</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TotoVueComponent from '@/components/TotoVueComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TotoVueComponent,
  }
}
</script>
