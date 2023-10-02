<template>
  <!-- <HeaderTodoList/> -->
  <div class="main">
    <!-- форма с задачами -->
    <form class="form_items">
      <!-- шапка -->
      <div class="header">
        МОЙ СПИСОК ЗАДАЧ
      </div>

      <el-tabs type="border-card">
        <el-tab-pane label="Все">Все</el-tab-pane>
        <el-tab-pane label="Активные">Активные</el-tab-pane>
        <el-tab-pane label="Завершенные">Завершенные</el-tab-pane>

        <!-- список задач -->
        <div class="list_items">
          <div class="wrapper_item">
            <div class="item_icon">
              <Check class="check_el" />
            </div>
            <div class="item_text">Задача номер один на сегодня - позаниматься в програмировании, изучить фреймворк вью жс
              и тайп скрипт!!!</div>
            <div class="item_remove">
              <DeleteFilled class="remove_el" />
            </div>
          </div>
          <div class="wrapper_item">
            <div class="item_icon">
              <Check class="check_el" />
            </div>
            <div class="item_text">Задача номер два на сегодня - позаниматься в програмировании, изучить фреймворк вью жс
              и тайп скрипт!!!</div>
            <div class="item_remove">
              <DeleteFilled class="remove_el" />
            </div>
          </div>
          <div class="wrapper_item">
            <div class="item_icon">
              <Check class="check_el" />
            </div>
            <div class="item_text">Задача номер три на сегодня - позаниматься в програмировании, изучить фреймворк вью жс
              и тайп скрипт!!!</div>
            <div class="item_remove">
              <DeleteFilled class="remove_el" />
            </div>
          </div>
          <div class="wrapper_item">
            <div class="item_icon">
              <Check class="check_el" />
            </div>
            <div class="item_text">Задача номер четыре на сегодня - позаниматься в програмировании, изучить фреймворк вью
              жс и тайп скрипт!!!</div>
            <div class="item_remove">
              <DeleteFilled class="remove_el" />
            </div>
          </div>
        </div>
      </el-tabs>

      <!-- добавление задачи -->
      <div class="add_item">
        <el-button round>
          <el-icon :size="20">
            <Plus color="red" />
          </el-icon>
        </el-button>
      </div>

      <!-- статистика выполненных/не выполненных задач -->
      <div class="statistics">
        выполненных 1, осталось 3
      </div>
    </form>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Check, DeleteFilled, Plus } from '@element-plus/icons-vue'
// import HeaderTodoList from './components/HeaderTodoList.vue'

export default defineComponent({
  name: "App",
  components: {
    Check,
    DeleteFilled,
    Plus
  }
})
</script>

<style lang="sass">
@import './assets/styles/main.sass' 

</style>
