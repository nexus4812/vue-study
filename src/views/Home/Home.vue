<template>
  <div class="home">
    <div class="row">
      <div class="small-12 text-center">
        <h4>VueJS + TypeScript Todo Application</h4>
      </div>
    </div>
    <div class="row align-center">
      <div class="small-12 medium-7 columns">
        <table class="main-table">
          <thead>
            <tr>
              <th>To-do List</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <transition-group name="fade" mode="out-in" tag="tbody">
            <tr v-for="task in tasks" :key="task.name">
              <td
                width="75%"
                v-text="task.name"
                class="line"
                :class="{ 'text-line-through': task.completed }"
              ></td>
              <td width="10%" class="text-right">
                <i
                  class="fa fa-check"
                  aria-hidden="true"
                  @click="setTaskComplete(task)"
                ></i>
              </td>
              <td width="10%" class="text-right">
                <i
                  class="fa fa-times"
                  aria-hidden="true"
                  @click.prevent="deleteTask(task)"
                ></i>
              </td>
              <td width="10%"></td>
            </tr>
          </transition-group>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Task from "../../model/Task";

export default defineComponent({
  name: "Home",
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    setTaskComplete(task: Task) {
      this.$store.commit("completeTask", task);
    },
    deleteTask(task: Task) {
      this.$store.commit("deleteTask", task);
    },
  },
  mounted() {
    this.tasks = this.$store.state.tasks;
  },
});
</script>

<style lang="scss" src="./Home.scss" scoped></style>
