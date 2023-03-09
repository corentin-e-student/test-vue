<template>
    <div id="app-2">

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
        @click="$emit('resetChange', resetList)">
            Réinitialiser liste
        </b-button>
    </div>
</template>
<script>
    import { mapActions, mapGetters, mapState } from 'vuex'
    export default {
        name: 'ToolsList',
        data: () => ({
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
            ...mapActions("todo", ["readTodoList", "removeTool"]),
        }
    }
</script>