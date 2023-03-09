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
  <script>

    export default {
        name: 'TotoVueComponent',
        data: () => ({
            toolList: [
            { id: 0, name: 'Marteau' },
            { id: 1, name: 'Visses' },
            { id: 2, name: 'Réglette' }
            ]
        })
    }
  </script>