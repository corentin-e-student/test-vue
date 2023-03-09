<template>
    <div id="app-1">    
        <AddToolField/>
        <b-list-group class="w-25 mt-5">
            <b-list-group-item class="d-flex justify-content-between align-items-center" 
            v-for="(tool, index) in todoList" :key="tool.id">
                {{ tool.name }} <b-button variant="outline-danger" 
                @click="removeTool(index)">Suprimer</b-button>
            </b-list-group-item>
        </b-list-group>

        <div class="w-25 mt-5 d-flex b-col justify-content-between align-items-center">
            <label>Nombre d'outils dans ma liste :</label>
            <span>{{ publishTodoListLength }}</span>
        </div>

        <b-button class="d-flex mt-5" variant="outline-secondary" 
        @click="resetTodoList">
            Réinitialiser la liste
        </b-button>
    </div>
</template>
<script>
    import AddToolField from '@/components/AddToolField.vue'
    import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

    export default {
        name: 'TodoList',
        data: () => ({
            /* tools: [
            { id: 0, name: 'Marteau' },
            { id: 1, name: 'Visses' },
            { id: 2, name: 'Réglette' }
            ], */
            toolname:null
        }),
        computed: {
            ...mapState({
                todoList: state => state.todo.todoList,
            }),
            ...mapGetters("todo", ["publishTodoListLength"]),
        },
        watch: {
            publishTodoListLength(newVal, oldVal) {
                console.log(newVal, oldVal)
            }
        },
        created() {
            this.readTodoList()
        },
        methods: {
            ...mapMutations({
                resetTodoList: "todo/TODO_LIST_SET"
            }),
            ...mapActions("todo", ["readTodoList", "addTool", "removeTool", "resetList"]),
            /* addTool() {
                this.tools.push({id: this.publishTodoListLength +1, name: this.toolname})
            },
            removeTool(id) {
                let toolIndex = this.tools.findIndex(tool => tool.id === id)
                this.tools.splice(toolIndex, 1)
            },
            removeTool2(index) {
                this.tools.splice(index, 1)
            } */
        },
        components: {
            AddToolField
        }
    }
</script>