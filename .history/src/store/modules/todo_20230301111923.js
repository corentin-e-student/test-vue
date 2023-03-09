const TODO_LIST_SET = "TODO_LIST_SET"
const ADD_TOOL = "ADD_TOOL"
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
    [ADD_TOOL](state) {
        console.log("test add button")
        state.todoList.push({id: this.publishTodoListLength +1, name: this.toolname})
    }
  },
  actions: {
    readTodoList({commit}) {
        commit(TODO_LIST_SET)
    },
    addTool({commit}) {
        commit(ADD_TOOL)
    }
  },
}
