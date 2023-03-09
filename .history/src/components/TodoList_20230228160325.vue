<template>
    <div id="app-1">
        <b-input-group class="w-25 mt-5">
        <b-form-input type="texte"></b-form-input>
        <b-input-group-append>
            <b-button variant="outline-secondary">Ajouter</b-button>
        </b-input-group-append>
        </b-input-group>
        <ul class="w-25">
            <li v-for="{id, name} in toolList" :key="id">{{ name }}</li>
        </ul>
    </div>
  </template>
  <script>

    export default {
        name: 'TotoList',
        data: () => ({
            toolList: [
            { id: 0, name: 'Marteau' },
            { id: 1, name: 'Visses' },
            { id: 2, name: 'Réglette' }
            ]
        })
    }
  </script>