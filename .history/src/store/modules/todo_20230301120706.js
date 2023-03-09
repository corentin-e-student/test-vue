const TODO_LIST_SET = "TODO_LIST_SET"
const ADD_TOOL = "ADD_TOOL"
const REMOVE_TOOL = "REMOVE_TOOL"
export default {
  namespaced: true,
  state: {
    todoList: []
  },
  getters: {
    publishTodoListLength: ({todoList}) => todoList.length
  },
  mutations: {
    [TODO_LIST_SET](state) {
        state.todoList = [{ id: 0, name: 'Marteau' },
        { id: 1, name: 'Visses' },
        { id: 2, name: 'Réglette' }]
    },
    [ADD_TOOL](state, tool) {
        state.todoList= [{content: tool, done: false}, ...state.todoList];
    },
    [REMOVE_TOOL](state, tool, id) {
        let toolIndex = this.todoList.findIndex(tool => tool.id === id)
        this.todoList.splice(toolIndex, 1)
    },
  },
  actions: {
    readTodoList({commit}) {
        commit(TODO_LIST_SET)
    },
    addTool({commit}) {
        commit(ADD_TOOL)
    },
    removeTool({commit}) {
        commit(REMOVE_TOOL)
    }
  },
}
