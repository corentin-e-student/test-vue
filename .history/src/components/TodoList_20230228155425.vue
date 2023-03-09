<template>
    <div id="app-1">
        <ul>
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