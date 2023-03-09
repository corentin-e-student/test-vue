const TODO_LIST_SET = "TODO_LIST_SET"
const ADD_TOOL = "ADD_TOOL"
const REMOVE_TOOL = "REMOVE_TOOL"
export default {
  namespaced: true,
  state: {
    todoList: [],
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
    [ADD_TOOL](state, [publishTodoListLength, toolname]) {
        state.todoList.push({id: publishTodoListLength +1, name: toolname});
    },
    [REMOVE_TOOL](state, index) {
      state.todoList.splice(index, 1)
    },
  },
  actions: {
    readTodoList({commit}) {
        commit(TODO_LIST_SET)
    },
    addTool({commit, getters}, toolname) {
        commit(ADD_TOOL, [getters.publishTodoListLength, toolname])
    },
    removeTool({commit}, index) {
        commit(REMOVE_TOOL, index)
    }
  },
}
