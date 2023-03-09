<template>
    <div>
        <div id="app-1">
            <ol>
                <tool-item
                v-for="item in toolList"
                v-bind:tool="item"
                v-bind:key="item.id"
                ></tool-item>
            </ol>
        </div>

        <b-list-group class="mt-5 w-25">
            <b-list-group-item class="d-flex justify-content-between align-items-center">Marteau<b-button variant="outline-danger">Suprimer</b-button></b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">Visses<b-button variant="outline-danger">Suprimer</b-button></b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">Règle<b-button variant="outline-danger">Suprimer</b-button></b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">Compa<b-button variant="outline-danger">Suprimer</b-button></b-list-group-item>
        </b-list-group>
    </div>
  </template>
  <script>
    Vue.component('tool-item', {
        props: ['tool'],
        template: '<li class="d-flex justify-content-between align-items-center">{{tool.name}}<b-button variant="outline-danger">Suprimer</b-button></li>'
    })

    let app1 = new Vue({
        el: '#app-1',
        data: {
            toolList: [
            { id: 0, name: 'Vegetables' },
            { id: 1, name: 'Cheese' },
            { id: 2, name: 'Whatever else humans are supposed to eat' }
            ]
        }
    })
    export default {
        name: 'TotoVueComponent',
    }
  </script>