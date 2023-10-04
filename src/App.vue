<template>
  <div class="main">
    <div class="form_items">
      <!-- шапка -->
      <HeaderTodoList />

      <el-tabs type="border-card">
        <!-- выбор вкладки с активными задчами -->
        <FilterItemsTodoList />

        <!-- список задач -->
        <ItemsTodoList :todos="todos" @doneTodo="doneTodo" @removeTodo="removeTodo" />
      </el-tabs>

      <!-- добавление задачи -->
      <AddItemTodoList @showForm="showForm" />

      <FormItemTodoList :isShowForm="isShowForm" @closeFormTodod="closeFormTodod" @addTodoList="addTodoList" />

      <!-- статистика выполненных/не выполненных задач -->
      <StatisticsTodoList />
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderTodoList from './components/HeaderTodoList.vue'
import FilterItemsTodoList from './components/FilterItemsTodoList.vue'
import ItemsTodoList from './components/ItemsTodoList.vue'
import AddItemTodoList from './components/AddItemTodoList.vue'
import StatisticsTodoList from './components/StatisticsTodoList.vue'
import FormItemTodoList from './components/FormItemTodoList.vue'

import { Todo } from './types/Todo'

interface State {
  isShowForm: boolean,
  todos: Todo[]
}

export default defineComponent({
  name: "App",

  data(): State {
    return {
      isShowForm: false,

      todos: [
        {
          id: 0,
          text: 'Задача номер один на сегодня - позаниматься в програмировании, изучить фреймворк вью жс и тайп скрипт!!!',
          done: false
        },
        {
          id: 1,
          text: 'Задача номер два на сегодня - позаниматься в програмировании, изучить фреймворк вью жс и тайп скрипт!!!',
          done: false
        },
        {
          id: 2,
          text: 'Задача номер три на сегодня - позаниматься в програмировании, изучить фреймворк вью жс и тайп скрипт!!!',
          done: false
        }
      ]
    }
  },

  methods: {
    showForm() {
      this.isShowForm = true
    },

    closeFormTodod() {
      this.isShowForm = false
    },

    addTodoList(todo: Todo) {
      this.todos.unshift(todo)
    },

    doneTodo(id: number) {
      this.todos.map((todo: Todo) => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
      })
    },

    removeTodo(id: number) {
      this.todos = this.todos.filter((todo: Todo) => todo.id !== id)
    }
  },

  components: {
    HeaderTodoList,
    FilterItemsTodoList,
    ItemsTodoList,
    AddItemTodoList,
    StatisticsTodoList,
    FormItemTodoList
  }
})

</script>

<style lang="sass">
@import './assets/styles/main.sass' 


</style>
