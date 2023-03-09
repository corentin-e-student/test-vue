<template>
  <div id="app-1">
    <b-form-select v-model="selected_country" :options="options"></b-form-select>
  </div>
</template>
<script>

export default {
    name: 'AddSiretFieldInput',
    data: () => ({
      return {
        selected: null,
        options: [
          { value: null, text: 'Choisissez un pays' },
          { value: 'a', text: 'Angleterre' },
          { value: 'b', text: 'France' },
          { value: 'c', text: 'Inde' },
          { value: 'd', text: 'Chine'}
        ]
      }
    }),
    computed: {

    },
    watch: {

    },
    methods: {

    }
}
</script>