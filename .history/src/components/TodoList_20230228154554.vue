<template>
    <div id="app-1">
        <ol class="mt-5 w-25">
            <tool-item
                v-for="item in toolList"
                v-bind:tool="item"
                v-bind:key="item.id"
            >
            </tool-item>
        </ol>
    </div>
  </template>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script>
  <script>
    Vue.component('tool-item', {
        props: ['tool'],
        template: '<li class="d-flex justify-content-between align-items-center">{{ tool.text }}<b-button variant="outline-danger">Suprimer</b-button></li>'
    })

    let app1 = new Vue({
        el: '#app-1',
        data: {
            toolList: [
            { id: 0, name: 'Marteau' },
            { id: 1, name: 'Visses' },
            { id: 2, name: 'Réglette' }
            ]
        }
    })

    console.log(app1)

    export default {
        name: 'TotoVueComponent',
    }
  </script>