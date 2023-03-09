const TODO_LIST_SET = "TODO_LIST_SET"
const ADD_TOOL = "ADD_TOOL"
const REMOVE_TOOL = "REMOVE_TOOL"
export default {
  namespaced: true,
  state: {
    todoList: [],
    toolname: null
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
    [ADD_TOOL](state, getters) {
        state.todoList.push({id: getters.publishTodoListLength +1, name: state.toolname});
    },
    [REMOVE_TOOL](state, index) {
      state.todoList.splice(index, 1)
    },
  },
  actions: {
    readTodoList({commit}) {
        commit(TODO_LIST_SET)
    },
    addTool({commit}) {
        commit(ADD_TOOL)
    },
    removeTool({commit}, index) {
        commit(REMOVE_TOOL, index)
    }
  },
}
