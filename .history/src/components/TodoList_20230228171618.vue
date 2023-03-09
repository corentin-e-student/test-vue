<template>
    <div id="app-1">
        <b-input-group class="w-25 mt-5">
            <b-form-input type="texte" v-model="toolname"></b-form-input>
            <b-input-group-append>
                <b-button variant="outline-secondary" @click="addTool">Ajouter</b-button>
            </b-input-group-append>
        </b-input-group>
        <b-list-group class="w-25 mt-5">
            <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="{id, name} in tools" :key="id" v-model="tool">
                {{ name }} <b-button variant="outline-danger" @click="removeTool(index)">Suprimer</b-button>
            </b-list-group-item>
        </b-list-group>
        <div class="w-25 mt-5 d-flex justify-content-between align-items-center">
            <label>Nombre d'outils dans ma liste :</label>
            <span>{{ publishTodoListLength }}</span>
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
            publishTodoListLength: ({tools}) => tools.length
        },
        methods: {
            addTool() {
                this.tools.push({id: this.publishTodoListLength +1, name: this.toolname})
            },
            removeTool(index) {
                this.tools.splice(index, 1)
            }
        }
    }
  </script>