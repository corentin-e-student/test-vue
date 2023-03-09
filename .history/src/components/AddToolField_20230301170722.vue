<template>
    <div id="app-1">
        <b-input-group class="w-25 mt-5">
            <b-form-input type="texte" v-model="toolname"></b-form-input>
            <b-input-group-append>
                <b-button variant="outline-primary" 
                @click="addTool(toolname)">
                    Ajouter
                </b-button>
            </b-input-group-append>
        </b-input-group>
    </div>
</template>
<script>
    import { off } from 'process';
import { mapActions, mapState } from 'vuex'
    export default {
        name: 'AddToolField',
        data: () => ({
            toolname: null
        }),
        computed: {
            ...mapState({
                todoList: state => state.todo.todoList,
            }),
        },
        watch: {
            publishTodoListLength() {
                this.toolname=""
            }
        },
        methods: {
            ...mapActions("todo", ["addTool"]),
        }
    }
</script>