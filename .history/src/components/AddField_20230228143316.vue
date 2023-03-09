<template>
    <div class="hello">
      <b-input-group>
        <b-form-input type="number" min="0.00"></b-form-input>

        <b-input-group-append>
          <b-button variant="outline-secondary">Ajouter</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
  </template>
  
  <script>
    export default {
        name: 'TotoVueComponent',
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  