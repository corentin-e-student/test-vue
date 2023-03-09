<template>
    <div class="hello">
        <ol>
            <tool-item></tool-item>
        </ol>
        <b-list-group class="mt-5 w-25">
            <b-list-group-item class="d-flex justify-content-between align-items-center">Marteau<b-button variant="outline-danger">Suprimer</b-button></b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">Visses<b-button variant="outline-danger">Suprimer</b-button></b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">Règle<b-button variant="outline-danger">Suprimer</b-button></b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">Compa<b-button variant="outline-danger">Suprimer</b-button></b-list-group-item>
        </b-list-group>
    </div>
  </template>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  <script>
  Vue.component('tool-item', {
    props: ['tool'],
    template: '<li>{{tool.name}}<b-button variant="outline-danger">Suprimer</b-button></li>'
  })
    let deleteItems = new Vue({
        el: ''
    })
    export default {
        name: 'TotoVueComponent',
    }
  </script>