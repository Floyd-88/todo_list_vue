<template>
  <div class="main">
    <form class="form_items">
      <!-- шапка -->
      <HeaderTodoList/>

      <el-tabs type="border-card">
        <!-- выбор вкладки с активными задчами -->
        <FilterItemsTodoList/>

        <!-- список задач -->
        <ItemsTodoList/>
      </el-tabs>

      <!-- добавление задачи -->
      <AddItemTodoList/>

      <!-- статистика выполненных/не выполненных задач -->
      <StatisticsTodoList/>
    </form>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderTodoList from './components/HeaderTodoList.vue'
import FilterItemsTodoList from './components/FilterItemsTodoList.vue'
import ItemsTodoList from './components/ItemsTodoList.vue'
import AddItemTodoList from './components/AddItemTodoList.vue'
import StatisticsTodoList from './components/StatisticsTodoList.vue'

export default defineComponent({
  name: "App",
  components: {
    HeaderTodoList,
    FilterItemsTodoList,
    ItemsTodoList,
    AddItemTodoList,
    StatisticsTodoList
  }
})
</script>

<style lang="sass">
@import './assets/styles/main.sass' 

</style>
