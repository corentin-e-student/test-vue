<template>
    <div id="app-1">
        <b-input-group class="w-25 mt-5">
            <b-form-input type="texte" v-model="toolname"></b-form-input>
            <b-input-group-append>
                <b-button variant="outline-secondary" @click="addTools">Ajouter</b-button>
            </b-input-group-append>
        </b-input-group>
        <b-list-group class="w-25 mt-5">
            <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="{id, name} in tools" :key="id">
                {{ name }} <b-button variant="outline-danger">Suprimer</b-button>
            </b-list-group-item>
        </b-list-group>
        <div class="w-25 mt-5 d-flex justify-content-between align-items-center">
            <label>Nombre d'outils dans ma liste :</label>
            <span>{{ tools.length }}</span>
        </div>
    </div>
  </template>
  <script>

    export default {
        name: 'TodoList',
        data: () => ({
            tools: [
            { id: 0, name: 'Marteau' },
            { id: 1, name: 'Visses' },
            { id: 2, name: 'Réglette' }
            ],
            toolname:null
        }),
        computed: {
            publishTodoListLength: () => {
                this.tools.length
            }
        },
        methods: {
            addTools() {
                this.tools.push({id: this.tool.id++, name: this.tool.name})
            }
        }
    }
  </script>