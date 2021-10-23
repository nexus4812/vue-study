import { createStore } from "vuex";
import Task from "../model/Task";

export default createStore<{ tasks: Task[] }>({
  state: {
    tasks: [new Task("UI design")],
  },
  mutations: {
    setTask: (state, task: Task) => state.tasks.push(task),
    deleteTask(state, task: Task): void {
      let taskIndex = state.tasks.findIndex((t) => t === task);
      state.tasks.splice(taskIndex, ++taskIndex);
    },
    completeTask(state, task: Task) {
      const taskIndex = state.tasks.findIndex((t) => t === task);
      state.tasks[taskIndex].completed = true;
    },
  },
  actions: {},
  modules: {},
});
