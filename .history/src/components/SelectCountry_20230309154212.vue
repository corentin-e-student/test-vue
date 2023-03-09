<template>
  <div id="app-1" class="d-flex align-items-start">
    <b-form-select class="w-25 mt-5"
    v-model="selectedCountry"
    :options="options"
    @change="onChange"
    >
    </b-form-select>
  </div>
</template>
<script>

export default {
  name: 'AddSiretFieldInput',
  data: () => ({
    selected: null,
    options: [
      { value: null, text: 'Choisissez un pays' },
      { value: 'eng', text: 'Angleterre' },
      { value: 'fr', text: 'France' },
      { value: 'inde', text: 'Inde' },
      { value: 'china', text: 'Chine'}
    ]
  }),
  methods: {
    onChange() {
        this.$emit("selected-country", this.selectedCountry);
    }
}
}
</script>