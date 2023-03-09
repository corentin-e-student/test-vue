<template>
    <div id="app-1">
        <b-input-group class="w-25 mt-5">
            <b-form-input type="texte"></b-form-input>
            <b-input-group-append>
                <b-button variant="outline-secondary">Ajouter</b-button>
            </b-input-group-append>
        </b-input-group>
        <b-list-group class="w-25 mt-5">
            <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="{id, name} in toolList" :key="id">
                {{ name }} <b-button variant="outline-danger">Suprimer</b-button>
            </b-list-group-item>
        </b-list-group>
        <div class="w-25 mt-5 d-flex justify-content-between align-items-center">
            <label>nombre d'outils dans ma liste :</label>
        </div>
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