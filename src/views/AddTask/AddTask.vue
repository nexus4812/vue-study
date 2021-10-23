<template>
  <div class="create_task">
    <div class="row">
      <div class="small-12 text-center">
        <h4>Add Tasks</h4>
      </div>
    </div>
    <div class="row align-center">
      <div class="small-12 medium-7 columns">
        <div class="card">
          <div class="card-section">
            <div class="row expanded">
              <div class="small-12 columns">
                <Legend for="todoName">
                  <b>Add your next task-</b>
                </Legend>
                <input
                  id="todoName"
                  type="text"
                  v-model="taskName"
                  placeholder="Add your next task here"
                  @keyup.enter="addTask()"
                />
              </div>
            </div>
            <div class="row expanded">
              <div class="small-12 columns text-right">
                <button
                  @click="addTask()"
                  type="button"
                  class="button success btn-lg btn-block"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Task from "../../model/Task";

export default defineComponent({
  name: "AddTask.vue",
  data() {
    return {
      taskName: "",
    };
  },
  methods: {
    addTask() {
      if (this.taskName !== "") {
        const newTask = new Task(this.taskName);
        this.$store.commit("setTask", newTask);
        this.taskName = "";
        this.$router.push("/");
      }
    },
  },
});
</script>

<style lang="scss" src="./AddTask.scss" scoped></style>
