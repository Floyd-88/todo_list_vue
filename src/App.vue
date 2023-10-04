<template>
  <div class="main">
    <div class="form_items">
      <!-- шапка -->
      <HeaderTodoList />

      <el-tabs type="border-card" v-model="activeName" class="demo-tabs">
        <!-- выбор вкладки с активными задчами -->
        <FilterItemsTodoList />

        <!-- список задач -->
        <ItemsTodoList :todos="filterTodo" @doneTodo="doneTodo" @removeTodo="removeTodo" />
      </el-tabs>

      <!-- добавление задачи -->
      <AddItemTodoList @showForm="showForm" />

      <FormItemTodoList :isShowForm="isShowForm" @closeFormTodod="closeFormTodod" @addTodoList="addTodoList" />

      <!-- статистика выполненных/не выполненных задач -->
      <StatisticsTodoList :stats="stats"/>
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

import {Stats} from './components/StatisticsTodoList.vue'


interface State {
  isShowForm: boolean,
  todos: Todo[],
  activeName: 'all' | 'active' | 'done'
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
      ],

      activeName: 'all'
    }
  },

  computed: {
    filterTodo(): Todo[] {
      switch (this.activeName) {
        case 'active':
          return this.activeFilter
        case 'done':
          return this.doneFilter
        case 'all':
        default:
          return this.todos
      }
    },

    stats(): Stats {
      return {
        active: this.activeFilter.length,
        done: this.doneFilter.length 
      }
    },

    activeFilter(): Todo[] {
      return this.todos.filter(todo => !todo.done)
    },

    doneFilter(): Todo[] {
      return this.todos.filter(todo => todo.done)
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
    },
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
