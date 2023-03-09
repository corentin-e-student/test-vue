const TODO_LIST_SET = "TODO_LIST_SET"
export default {
  namespaced: true,
  state: {
    todoList: []
  },
  getters: {
    
  },
  mutations: {
    [TODO_LIST_SET](state) {
        state.todoList = [{ id: 0, name: 'Marteau' },
        { id: 1, name: 'Visses' },
        { id: 2, name: 'Réglette' }]
    }
  },
  actions: {
    readTodoList({commit}) {
        commit(TODO_LIST_SET)
    }
  },
}
