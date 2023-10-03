<template>
  <div class="main">
    <div class="form_items">
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

      <FormItemTodoList/>

      <!-- статистика выполненных/не выполненных задач -->
      <StatisticsTodoList/>
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

export default defineComponent({
  name: "App",
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
