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

      <!-- кнопка для раскрытия формы -->
      <AddItemTodoList @showForm="showForm" />

      <!-- форма для добавление новой задачи -->
      <FormItemTodoList :isShowForm="isShowForm" @showForm="showForm" @addTodoList="addTodoList" />

      <!-- статистика выполненных/не выполненных задач -->
      <StatisticsTodoList :stats="stats" />
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
import { Stats } from './components/StatisticsTodoList.vue'

interface State {
  isShowForm: boolean,
  todos: Todo[],
  activeName: 'all' | 'active' | 'done'
}

export default defineComponent({
  name: "App",

  mounted() {
    this.loadItemsTask()
  },

  data(): State {
    return {
      isShowForm: false,

      todos: [],

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
    loadItemsTask() {
      let localItems: string | null = localStorage.getItem('todos');
      if(localItems !== null) {
        this.todos = JSON.parse(localItems);
      } else {
        this.todos = []
      }
    },

    showForm(bool: boolean) {
      this.isShowForm = bool
    },

    addTodoList(todo: Todo) {
      this.todos.unshift(todo)
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },

    doneTodo(id: number) {
      this.todos.map((todo: Todo) => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
      })
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },

    removeTodo(id: number) {
      this.todos = this.todos.filter((todo: Todo) => todo.id !== id)
      localStorage.setItem('todos', JSON.stringify(this.todos))
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
